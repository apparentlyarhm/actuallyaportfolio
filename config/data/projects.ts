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
  category: string;
  status: "live" | "partially-live" | "unreleased" | "deprecated";
}

export const projects: Project[] = [
  {
    title: "Spring based whitelisting tool for firewalls on Google Cloud Platform",
    projectDesc: [
      "A Spring Boot and Next.js based IP whitelisting platform for managing GCP Firewall rules, deployed via Cloud Run with CI/CD using PowerShell and Artifact Registry."
    ],
    projectLink: "https://apparentlyarhm.github.io/minecraft-vm-management-console/",
    images: [sprng.src, njs.src, gcp.src],
    category: "Personal",
    status: "partially-live"
  },
  {
    title: "Spoti-proxy",
    projectDesc: [
      "An Go proxy for accessing Spotify, Steam and Github statistics with built-in token refresh and rate limiting, containerized and deployed on Cloud Run via GitHub Actions (originally written in Express)",
    ],
    projectLink: "https://github.com/apparentlyarhm/app-proxy-go/",
    images: [go.src, ps.src, gcp.src],
    category: "Personal",
    status: "live"
  },
  {
    title: "Personal website",
    projectDesc: [
      "A TypeScript and Next.js based NOT A portfolio site styled with NextUI, created during a work stint in Chennai as an exploration into the modern React ecosystem. I ended up adding a LOT more stuff and thats just for fun. I highly recommend checking it out!"
    ],
    projectLink: "https://github.com/apparentlyarhm/notaportfolio",
    images: [ts.src, njs.src],
    category: "Personal",
    status: "live"
  },
  {
    title: "Infra Code for Minecraft Server- GCP",
    projectDesc: [
      "A Terraform-based infrastructure stack for provisioning Minecraft servers on GCP, intended as an easy entry point for hosting game servers in the cloud."
    ],
    projectLink: "https://github.com/apparentlyarhm/minecraft-terraform",
    images: [tf.src, linux.src],
    category: "Personal",
    status: "unreleased"
  },
  {
    title: "Fully Randomized Examination system using Django",
    projectDesc: [
      "A Django-based examination engine utilizing a centralized database and constraint-based logic to dynamically generate randomized question sets with difficulty levels."
    ],
    projectLink: "https://github.com/apparentlyarhm/randomexamapp",
    images: [django.src, gcp.src, js.src, mysql.src, py.src],
    category: "Personal",
    status: "deprecated"
  },
];
