import { animate, motion } from "framer-motion"
import { extendTailwindMerge } from "tailwind-merge"


// Variants
const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// Calculate the reverse index for staggeered delay
const reverseIndex = (index) => {
    const totalSteps = 6; // number of steps
    return totalSteps - index -1;
}

const Stairs = () => {
    return <>
    
    {/*  render 6 motion divs, each representing a step of stairs.
        Each div will have the same animation by the stairsAnimation object
        The delay for each deiv is calculated sinamically based on it's reverse index,
        creating a staggered effect with decreasing delay for each subsequent step
    */}
    {[...Array(6)].map((_, index) => {
        return (
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
            />
            );
        })}
    </>
};

export default Stairs