
import ProjectPopover from "@/components/project/pop-over";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { projects } from "@/config/data/projects";
import { career } from "@/config/data/work";
import { bitter, nunito } from "@/config/fonts";
import clsx from "clsx";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { education } from "@/config/data/ed";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-start sm:items-center justify-center gap-4 py-8 md:py-10">
      <div className={clsx("flex flex-col max-w-full sm:max-w-4xl justify-center gap-6 ", bitter.className)}>

        <img src="/cat.png" height={50} width={91} className="rounded-3xl"></img>
        <p className={clsx("text-xl")}>Arhum's Portfolio.</p>

        <div className="flex flex-col gap-2 rounded-3xl text-justify">
          <p className="font-extrabold tracking-wide text-4xl">Philosophy</p>
          <p className="text-base text-gray-700">
            {"`Portfolio`- /pɔːtˈfəʊliəʊ/."}
          </p>
          <p className="italic text-sm"> a set of pieces of creative work intended to demonstrate a person's ability to a potential employer. </p>

          <br />

          <p>
            This data used to live on my main website, but I split it off to look “professional.”
            Whatever that means. Some folks call it focus, I call it compartmentalized genius.
          </p>
          <p>
            Anyway, go check out the real deal.
          </p>

          <Button
            variant="bordered"
            endContent={<ExternalLink size={16} />}
            className={clsx("py-10 max-w-[200px] text-medium text-gray-800 font-black border-1 hover:border-blue-100 hover:text-blue-600 hover:bg-blue-100", nunito.className)}
            radius="full"
          >
            {"ARHM.DEV"}
          </Button>
        </div>

        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <p className="font-extrabold tracking-wide text-4xl">Work</p>

          <div className="flex flex-col gap-4 text-justify">
            {career.map((item) => (
              <div
                key={`${item.orgName}-${item.startTime}`}
                className="flex flex-col group"
              >
                <p className="text-lg font-semibold">{item.title}</p>

                <div className="flex items-center gap-1">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
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

                <p className="text-sm text-gray-700 mt-1">{item.body}</p>
              </div>
            ))}
          </div>

        </div>

        <br />

        <div className="flex flex-col gap-3 rounded-4xl">
          <p className="font-extrabold tracking-wide text-4xl">Projects</p>
          <div className="flex flex-col gap-7 text-justify">
            {projects.map((item) => (
              <div key={item.title} className="flex flex-col">

                <Popover
                  showArrow
                  backdrop="opaque"
                  placement="top-start"
                  classNames={{
                    base: ["before:bg-default-200"],
                    content: [
                      "py-3 px-4 border border-default-200",
                      "bg-linear-to-br from-white to-default-300",
                      "dark:from-default-100 dark:to-default-50",
                    ],
                  }}
                >
                  <PopoverTrigger>
                    <div className="inline-flex w-full min-w-0 items-center gap-1 text-lg font-semibold cursor-pointer hover:text-blue-600">
                      <span className="truncate">{item.title}</span>
                      <ArrowUpRight size={20} className="flex-shrink-0" />
                    </div>
                  </PopoverTrigger>

                  <PopoverContent>
                    <ProjectPopover project={item} />
                  </PopoverContent>
                </Popover>

                <p className="text-sm text-gray-700">
                  {item.projectDesc.join(" ")}
                </p>

                <div className="flex flex-row gap-2 p-1">
                  {item.images.map((img) => (<img key={img} height={20} width={20} src={img}></img>
                  )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <p className="font-extrabold tracking-wide text-4xl">Education</p>

          <div className="flex flex-col gap-7 text-justify">
            {education.map((item) => (

              <div key={`${item.school}-${item.graduatedIn}`} className="flex flex-col">
                <p className="text-lg font-semibold">{item.graduatedIn} @ {item.school}</p>
                <p className="text-xs text-gray-500">
                  {item.location ? `${item.location}` : ""}
                </p>
                <p className="text-sm text-gray-700 mt-1">{item.body}</p>
              </div>

            ))}
          </div>
        </div>

        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <p className="font-extrabold tracking-wide text-4xl">Contact / Socials / Links</p>
        </div>

      </div>
    </section>
  );
}
