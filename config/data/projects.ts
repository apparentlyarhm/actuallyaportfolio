import django from "../../public/logos/django.svg";
import gcp from "../../public/logos/gcp.svg";
import linux from "../../public/logos/linuxcolor.svg";
import njs from "../../public/logos/njs.svg";
import py from "../../public/logos/py.svg";
import js from "../../public/logos/js.svg";
import ts from "../../public/logos/ts.svg";
import tf from "../../public/logos/terraform.png";
import sprng from "../../public/logos/sprng.svg";
import ps from "../../public/logos/ps.svg";
import go from "../../public/logos/go.svg"
import as from "../../public/logos/astro.png"

export interface Project {
  title: string;
  projectDesc: string[];
  projectLink: string;
  images: string[];
  category: string; // bro i dont even remember adding this field what do i even use it for
  status: "live" | "partially-live" | "unreleased" | "deprecated";
}

export const projects: Project[] = [
  {
    title: "Bastion",
    projectDesc: [
      "A Go + Next.js based Minecraft server management platform stuff like IP whitelisting, Firewall configurations, Server mod downloads and a custom log viewer"
      , "It was ported to Go for faster spin up and build times and reduced image size."
    ],
    projectLink: "https://bastion.arhm.dev",
    images: [sprng.src, njs.src, gcp.src, go.src],
    category: "Personal",
    status: "live"
  },
  {
    title: "Muninn",
    projectDesc: [
      "“Muninn” is a Go-based API gateway with observability, adaptive failover, and secure request handling, deployed on Cloud Run for space.arhm.dev"
      ,"has a Redis→MongoDB pipeline for scalable analytics with replay protection and rate limiting"
      ,"Integrated Tailscale (tsnet) for secure hybrid (local + cloud) communication. I self host a postgresSQL database at home"
    ],
    projectLink: "https://muninn.arhm.dev",
    images: [go.src, ps.src, gcp.src],
    category: "Personal",
    status: "live"
  },
  {
    title: "Personal Space",
    projectDesc: [
      "Not a portfolio by the way, and expect more random stuff on this site. (space.arhm.dev)."
    ],
    projectLink: "https://space.arhm.dev",
    images: [ts.src, njs.src],
    category: "Personal",
    status: "live"
  },
  {
    title: "Infra Code for Minecraft Server- GCP",
    projectDesc: [
      "Redoing all infra stuff for a minecraft server over and over is incredibly boring, so we automate everything from the infra itself to all the software setup and even mod loaders."
    ],
    projectLink: "https://github.com/apparentlyarhm/minecraft-terraform",
    images: [tf.src, linux.src, gcp.src],
    category: "Personal",
    status: "unreleased"
  },
  {
    title: "Monoblog",
    projectDesc: [
      "My personal blog. All blog are MDs, built by astro then served statically by Go. Hosted on Render, and now features anonymous analytics powered by muninn; The link is the source code, the main blog link is up."
    ],
    projectLink: "https://github.com/apparentlyarhm/monoblog",
    images: [go.src, as.src],
    category: "Personal",
    status: "live"
  },
];
