import ProjectPopover from "@/components/project/pop-over";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { projects } from "@/config/data/projects";
import { career } from "@/config/data/work";
import { bitter, nunito } from "@/config/fonts";
import clsx from "clsx";
import { ArrowDown, ArrowUpRight, ExternalLink } from "lucide-react";
import { education } from "@/config/data/ed";
import { Button } from "@heroui/button";
import { links } from "@/config/data/socials";

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
            as={"a"}
            href="https://nsfw.arhm.dev"
            target="_blank"
            rel="noopener noreferrer"
            endContent={<ArrowUpRight size={20} />}
            className={clsx("py-6 mt-8 max-w-[200px] bg-gray-200 text-medium text-gray-800 font-black border-1 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-100", nunito.className)}
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
            className={clsx("py-6 mt-2 max-w-[200px] bg-gray-200 text-medium text-gray-800 font-black border-1 hover:border-green-400 hover:text-green-600 hover:bg-green-100", nunito.className)}
            radius={"lg"}
          >
            {"Get the resume"}
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
                    href={item.href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-800 hover:text-blue-600 flex items-center gap-1"
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
                  offset={5}
                  placement="top-start"
                >
                  <PopoverTrigger>
                    <div id="po-trigger" className="inline-flex w-full min-w-0 items-center gap-1 text-lg font-semibold cursor-pointer hover:text-blue-600">
                      <span className="truncate">{item.title}</span>
                      <ArrowUpRight size={20} className="flex-shrink-0" />
                    </div>
                  </PopoverTrigger>

                  <PopoverContent id="po-content-parent" children={<ProjectPopover project={item} />} className="p-0" />
                  {/* the p-0 above is added as an override for internal implementation of the popovercontent. */}
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
                className={clsx("py-5 max-w-[200px] bg-gray-200 text-medium text-gray-800 font-black border-1 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-100", nunito.className)}
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
