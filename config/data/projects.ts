import django from "../../public/logos/django.svg";
import gcp from "../../public/logos/gcp.svg";
import linux from "../../public/logos/linuxcolor.svg";
import mysql from "../../public/logos/mysqlcolor.svg";
import njs from "../../public/logos/njs.svg";
import py from "../../public/logos/py.svg";
import js from "../../public/logos/js.svg";
import ts from "../../public/logos/ts.svg";
import tf from "../../public/logos/terraform.png";
import sprng from "../../public/logos/sprng.svg";
import ps from "../../public/logos/ps.svg";
import go from "../../public/logos/go.svg"

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
    title: "Spring based whitelisting tool for firewalls on Google Cloud Platform",
    projectDesc: [
      "A Spring Boot and Next.js based Minecraft server management platform stuff like IP whitelisting, Firewall configurations, Server mod downloads. deployed via Cloud Run with CI/CD using PowerShell and Artifact Registry. Too early stage to have a Github actions pipeline though. Goal is to eliminate GCP console after setting up the server once (preferablly through IoC soon)"
    ],
    projectLink: "https://mccon.arhm.dev",
    images: [sprng.src, njs.src, gcp.src],
    category: "Personal",
    status: "partially-live"
  },
  {
    title: "Spoti-proxy",
    projectDesc: [
      "An Go proxy for accessing Spotify, Steam and Github statistics with built-in token refresh and rate limiting, containerized and deployed on Cloud Run via GitHub Actions (originally written in Express). Main backend for nsfw.arhm.dev",
    ],
    projectLink: "https://github.com/apparentlyarhm/app-proxy-go/",
    images: [go.src, ps.src, gcp.src],
    category: "Personal",
    status: "live"
  },
  {
    title: "Personal website",
    projectDesc: [
      "Not a portfolio by the way, and expect more random stuff on this site. (nsfw.arhm.dev)"
    ],
    projectLink: "https://github.com/apparentlyarhm/notaportfolio",
    images: [ts.src, njs.src],
    category: "Personal",
    status: "live"
  },
  {
    title: "Infra Code for Minecraft Server- GCP",
    projectDesc: [
      "Redoing all infra stuff for a minecraft server over and over is incredibly boring, so we automate everything from the infra itself to all the software setup and even mod loaders soon"
    ],
    projectLink: "https://github.com/apparentlyarhm/minecraft-terraform",
    images: [tf.src, linux.src, gcp.src],
    category: "Personal",
    status: "unreleased"
  },
  {
    title: "Fully Randomized Examination system using Django",
    projectDesc: [
      "Don't bother - this was the first thing I actually `built` and `deployed` (on GCP) - but it was more of a POC"
    ],
    projectLink: "https://github.com/apparentlyarhm/randomexamapp",
    images: [django.src, gcp.src, js.src, mysql.src, py.src],
    category: "Personal",
    status: "deprecated"
  },
];
