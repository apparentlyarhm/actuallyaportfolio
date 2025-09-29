import { projects } from "@/config/data/projects";
import { career } from "@/config/data/work";
import { bitter, jbMono, nunito } from "@/config/fonts";
import clsx from "clsx";
import { ArrowDown, ArrowUpRight, ExternalLink } from "lucide-react";
import { education } from "@/config/data/ed";
import { Button } from "@heroui/button";
import { links } from "@/config/data/socials";

const statusColors: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  live: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  "partially-live": {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  unreleased: {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
  },
  deprecated: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
  },
};

export default function Home() {
  const getStatusColors = (status: string) =>
    statusColors[status] || statusColors["unreleased"];

  return (
    <section className="flex flex-col items-start sm:items-center justify-center gap-4 py-8 md:py-10">
      <div className={clsx("flex flex-col max-w-full sm:max-w-4xl justify-center gap-6 ", bitter.className)}>

        <img src="/cat.png" height={50} width={91} className="rounded-3xl"></img>
        <p className={clsx("text-xl sbt-dark")}>Arhum's Portfolio.</p>

        <div className="flex flex-col gap-2 rounded-3xl text-justify">
          <p className="font-extrabold tracking-wide text-4xl hdn-dark">Philosophy</p>
          <p className="text-base sbt-dark">
            {"`Portfolio`- /pɔːtˈfəʊliəʊ/."}
          </p>
          <p className="italic text-sm bdy"> a set of pieces of creative work intended to demonstrate a person's ability to a potential employer. </p>

          <hr className="bdy mt-5" />

          <br />

          <p className="bdy">
            This data used to live on my main website, but I split it off to look “professional.”
            Whatever that means. Some folks call it focus, I call it compartmentalized genius.
          </p>
          <p className="bdy">
            Anyway, go check out the real deal.
          </p>

          <Button
            variant="bordered"
            as={"a"}
            href="https://nsfw.arhm.dev"
            target="_blank"
            rel="noopener noreferrer"
            endContent={<ArrowUpRight size={20} />}
            className={clsx("py-6 mt-8 max-w-[200px] btn-dark", nunito.className)}
            radius={"lg"}
          >
            {"nsfw.arhm.dev"}
          </Button>

          <Button
            variant="bordered"
            as={"a"}
            href="https://drive.google.com/file/d/1xnLWwF43JkZZShlxARfgrWAIWBli_0al/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            endContent={<ArrowDown size={20} />}
            className={clsx("py-6 mt-2 max-w-[200px] btn-dark", nunito.className)}
            radius={"lg"}
          >
            {"Get the resume"}
          </Button>
        </div>
        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <p className="font-extrabold tracking-wide text-4xl hdn-dark">Work</p>

          <div className="flex flex-col gap-4 text-justify">
            {career.map((item) => (
              <div
                key={`${item.orgName}-${item.startTime}`}
                className="flex flex-col group"
              >
                <p className="text-lg font-semibold hdn-dark">{item.title}</p>

                <div className="flex items-center gap-1">
                  <a
                    href={item.href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium lnk-dark flex items-center gap-1"
                  >
                    <span>{item.orgName}</span>
                    <ExternalLink
                      size={14}
                      className=""
                    />
                  </a>
                </div>

                <p className="text-xs text-gray-500">
                  {item.startTime}
                  {item.endTime ? ` – ${item.endTime}` : ""}
                </p>

                <p className="text-sm text-gray-700 mt-1 tracking-wide">{item.body}</p>
              </div>
            ))}
          </div>

        </div>

        <br />

        <div className="flex flex-col gap-3 rounded-4xl">
          <p className="font-extrabold tracking-wide text-4xl hdn-dark">Projects</p>
          <div className="flex flex-col gap-7 text-justify">
            {projects.map((item) => {
              const colors = getStatusColors(item.status);

              return (
                <div key={item.title} className="flex flex-col">

                  <a href={item.projectLink ? item.projectLink : ""} id="po-trigger" className="inline-flex w-full min-w-0 items-center gap-1 text-lg font-semibold cursor-pointer lnk-dark">
                    <span className="truncate">{item.title}</span>
                    <ArrowUpRight size={20} className="flex-shrink-0" />
                  </a>

                  <p className="text-sm bdy text-gray-700 tracking-wide">
                    {item.projectDesc.join(" ")}
                  </p>


                  <div className="flex flex-row gap-1 mt-2">
                    
                    <div className="flex flex-row gap-2 border-1 border-gray-500 px-3 py-2 rounded-2xl">
                      {item.images.map((img) => (
                        <img key={img} height={20} width={20} src={img} />
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>

        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <p className="font-extrabold tracking-wide text-4xl hdn-dark">Education</p>

          <div className="flex flex-col gap-7 text-justify">
            {education.map((item) => (

              <div key={`${item.school}-${item.graduatedIn}`} className="flex flex-col">
                <p className="text-lg font-semibold hdn-dark">{item.graduatedIn} @ {item.school}</p>
                <p className="text-xs bdy">
                  {item.location ? `${item.location}` : ""}
                </p>
                <p className="text-sm sbt-dark mt-1">{item.body}</p>
              </div>

            ))}
          </div>
        </div>

        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <p className="font-extrabold tracking-wide text-4xl hdn-dark">Contact / Socials / Links</p>

          <br />

          <div className="flex flex-row gap-2 text-justify">
            {links.map((item) => (
              <Button
                isIconOnly
                key={item.title}
                variant="bordered"
                as={"a"}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                startContent={<item.icon />}
                className={clsx("py-5 max-w-[200px] btn-dark", nunito.className)}
                radius={"lg"}
              >
              </Button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
