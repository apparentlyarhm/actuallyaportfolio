import { Bitter, Nunito, JetBrains_Mono } from "next/font/google";

export const bitter = Bitter({
  weight: ["400", "600", "700", "800", "900"],
  preload: false,
})

export const nunito = Nunito({
  weight: ["400", "600", "700", "800", "900"],
  preload: false,
});

export const jbMono = JetBrains_Mono({
  weight: ["400", "600", "700", "800"],
  preload: false,
})