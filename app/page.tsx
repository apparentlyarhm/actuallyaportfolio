import { projects } from "@/config/data/projects";
import { bitter } from "@/config/fonts";
import clsx from "clsx";

export default function Home() {
  return (
    <section className="flex flex-col items-start  justify-center gap-4 py-8 md:py-10">
      <div className={clsx("inline-block max-w-xl text-start justify-center", bitter.className)}>
        <p className="font-semibold text-3xl">imagine a heading here</p>

        {projects.map((item) => {
          return (
            <p>{item.title}</p>
          )
        })}
      </div>
    </section>
  );
}
