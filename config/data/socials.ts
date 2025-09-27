import { DiscordIcon, GithubIcon, InstagramIcon, TwitterIcon, MailIcon, LinkedInIcon } from "@/components/icons";

export interface socialItem {
    icon: React.ElementType,
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
        icon: GithubIcon,
        title: "Github",
        href: "https://github.com/apparentlyarhm"
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