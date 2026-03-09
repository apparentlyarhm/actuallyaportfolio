import { DiscordIcon, GithubIcon, InstagramIcon, MailIcon, LinkedInIcon, LTTIcon } from "@/components/icons";
import { ArrowDown, BookAudio, Music } from "lucide-react";

export const GDRIVE_SLUG = "https://drive.google.com/file/d/1xnLWwF43JkZZShlxARfgrWAIWBli_0al"

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
        icon: LinkedInIcon,
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/shaharhum/"
    },
    {
        icon: LTTIcon,
        title: "LTT Forums",
        href: "https://linustechtips.com/profile/455909-apparentlyarhm/"
    },
]

export const bigLinks: BigButtonLinks[] = [
    {
        icon: GithubIcon,
        title: "Github",
        href: "https://github.com/apparentlyarhm",
        hoverStyle: "hover:border-gray-400 hover:text-gray-100 hover:bg-black",
    },
    {
        icon: BookAudio,
        title: "Blog",
        href: "https://blog.arhm.dev",
        hoverStyle: "hover:border-orange-400 hover:text-orange-600 hover:bg-orange-100",
    },
    {
        icon: Music,
        title: "Space",
        href: "https://space.arhm.dev",
        hoverStyle: "hover:border-blue-400 hover:text-blue-600 hover:bg-blue-100",
    },

]

export const RESUME_ICON: BigButtonLinks ={
    icon: ArrowDown,
    title: "Resume",
    href: `${GDRIVE_SLUG}/view?usp=drive_link`,
    hoverStyle: "hover:border-rose-400 hover:text-rose-600 hover:bg-rose-100",
}
