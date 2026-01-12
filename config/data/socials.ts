import { DiscordIcon, GithubIcon, InstagramIcon, TwitterIcon, MailIcon, LinkedInIcon } from "@/components/icons";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export interface socialItem {
    icon: React.ElementType,
    title: string,
    href: string,
}

export interface BigButtonLinks {
    icon: React.ElementType,
    hoverStyle: string
    title: string,
    href: string,
}

export const links: socialItem[] = [
    {
        icon: MailIcon,
        title: "Mail me",
        href: "mailto:mohd.arhum28@gmail.com"
    },
    {
        icon: DiscordIcon,
        title: "Discord",
        href: "https://discord.com/users/689729095923531873"
    },
    {
        icon: InstagramIcon,
        title: "Instagram",
        href: "https://instagram.com/apparentlyarhm"
    },
    {
        icon: TwitterIcon,
        title: "Tweeter",
        href: "https://x.com/MohammedArhum"
    },
    {
        icon: LinkedInIcon,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/shaharhum/"
    },
]

export const bigLinks: BigButtonLinks[] = [
    {
        icon: ArrowUpRight,
        title: "Github",
        href: "https://github.com/apparentlyarhm",
        hoverStyle: "hover:border-gray-400 hover:text-gray-100 hover:bg-black",
    },
    {
        icon: ArrowDown,
        title: "Get the resume",
        href: "https://drive.google.com/file/d/1xnLWwF43JkZZShlxARfgrWAIWBli_0al/view?usp=drive_link",
        hoverStyle: "hover:border-green-400 hover:text-green-600 hover:bg-green-100",
    },
    {
        icon: ArrowUpRight,
        title: "Blog",
        href: "https://blog.arhm.dev",
        hoverStyle: "hover:border-blue-400 hover:text-blue-600 hover:bg-blue-100",
    },
]