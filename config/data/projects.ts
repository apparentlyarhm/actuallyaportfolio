import gcp from "../../public/logos/gcp.svg";
import linux from "../../public/logos/linuxcolor.svg";
import njs from "../../public/logos/njs.svg";
import js from "../../public/logos/js.svg";
import ts from "../../public/logos/ts.svg";
import tf from "../../public/logos/terraform.png";
import sprng from "../../public/logos/sprng.svg";
import ps from "../../public/logos/ps.svg";
import go from "../../public/logos/go.svg"
import as from "../../public/logos/astro.png"

export interface Project {
  t: string; // title
  des: string[]; // description
  l: string; // link
  i: string[]; // images (more like icons)
  c: string; // category
  s: "live" | "partially-live" | "unreleased" | "deprecated"; // status
}

export const projects: Project[] = [
  {
    t: "Bastion",
    des: [
      "A Go + Next.js based Minecraft server management platform stuff like IP whitelisting, Firewall configurations, Server mod downloads and a custom log viewer"
      , "It was ported to Go for faster spin up and build times and reduced image size."
    ],
    l: "https://bastion.arhm.dev",
    i: [sprng.src, njs.src, gcp.src, go.src],
    c: "Personal",
    s: "live"
  },
  {
    t: "Muninn",
    des: [
      "“Muninn” is a Go-based API gateway with observability, adaptive failover, and secure request handling, deployed on Cloud Run for space.arhm.dev"
      ,"has a Redis→MongoDB pipeline for scalable analytics with replay protection and rate limiting"
      ,"Integrated Tailscale (tsnet) for secure hybrid (local + cloud) communication. I self host a postgresSQL database at home"
    ],
    l: "https://muninn.arhm.dev",
    i: [go.src, ps.src, gcp.src],
    c: "Personal",
    s: "live"
  },
  {
    t: "Space",
    des: [
      "Not a portfolio by the way, and expect more random stuff on this site. (space.arhm.dev)."
    ],
    l: "https://space.arhm.dev",
    i: [ts.src, njs.src],
    c: "Personal",
    s: "live"
  },
  {
    t: "Infrastructure Config for Minecraft Server- GCP",
    des: [
      "Redoing all infra stuff for a minecraft server over and over is incredibly boring, so we automate everything from the infra itself to all the software setup and even mod loaders.",
      "This also serves as a reference even if terraform is not used"
    ],
    l: "https://github.com/apparentlyarhm/minecraft-terraform",
    i: [tf.src, linux.src, gcp.src],
    c: "Personal",
    s: "unreleased"
  },
  {
    t: "Monoblog",
    des: [
      "My personal blog. All blog are MDs, built by astro then served statically by Go. Hosted on Render, and now features anonymous analytics powered by muninn; Following link is the source code, the main blog link is at the top."
    ],
    l: "https://github.com/apparentlyarhm/monoblog",
    i: [go.src, as.src],
    c: "Personal",
    s: "live"
  },
  {
    t: "T3",
    des: [
      "A multiplayer tictactoe game, we all know and love. Built using nakama and nextjs."
    ],
    l: "https://t3.arhm.dev",
    i: [go.src, gcp.src, njs.src],
    c: "Personal",
    s: "live"
  },
];
