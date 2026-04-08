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

// the first element in description is a summary. it is not shown by default.
// so all techincal details can be added from second element onwards
export const projects: Project[] = [
  {
    t: "Bastion",
    des: [
      "E2E Minecraft admin console",
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
      "Glorified API gateway for my apps",
      "“Muninn” is a Go-based API gateway with observability, adaptive failover, and secure request handling, deployed on Cloud Run for space.arhm.dev"
      ,"has a Redis→MongoDB pipeline for scalable analytics with replay protection and rate limiting"
      ,"Integrated Tailscale (tsnet) for secure hybrid (local + cloud) communication. I self host a postgresSQL database at home"
      ,"Multiple of my applications use this in some way or the other."
    ],
    l: "https://muninn.arhm.dev",
    i: [go.src, ps.src, gcp.src],
    c: "Personal",
    s: "live"
  },
  {
    t: "Space",
    des: [
      "Playground",
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
      "Infra config for Minecraft on GCP",
      "Redoing all infra stuff for a minecraft server over and over is incredibly boring, so we automate everything from the infra itself to all the software setup and even mod loaders.",
      "This also serves as a reference even if terraform is not used."
    ],
    l: "https://github.com/apparentlyarhm/minecraft-terraform",
    i: [tf.src, linux.src, gcp.src],
    c: "Personal",
    s: "unreleased"
  },
  {
    t: "Monoblog",
    des: [
      "Markdown-powered blog",
      "Content written in Markdown, built with Astro, and statically served via Go",
      "Hosted on Render with anonymous analytics powered by Muninn"
    ],
    l: "https://github.com/apparentlyarhm/monoblog",
    i: [go.src, as.src],
    c: "Personal",
    s: "live"
  },
  {
    t: "T3",
    des: [
      "Multiplayer tic-tac-toe with Matchmaking",
      "Real-time multiplayer game built using Nakama and Next.js",
      "Deployed on Cloud run as an experiment, using Caddy"
    ],
    l: "https://t3.arhm.dev",
    i: [go.src, gcp.src, njs.src],
    c: "Personal",
    s: "live"
  },
];
