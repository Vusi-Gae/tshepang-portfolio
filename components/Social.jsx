"use client";
import Link from "next/link";

import { FaGithub, FaFacebook, FaTwitter} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Vusi-Gae"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100081511148049"},
    {icon: <FaTwitter />, path: "https://x.com/tshepi_vee?s=21&t=_DhZ6uZuRbvM0rou7hmG7A"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/tshepang-gaeatlholwe"},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );

};

export default Social;