import { projects } from "@/config/data/projects";
import { career } from "@/config/data/work";
import { bitter, jbMono, nunito } from "@/config/fonts";
import clsx from "clsx";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { education } from "@/config/data/ed";
import { Button } from "@heroui/button";
import { bigLinks, links } from "@/config/data/socials";

const statusColors: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  "live": {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  "partially-live": {
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  "unreleased": {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
  },
  "deprecated": {
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
      <div className={clsx("flex flex-col max-w-full sm:max-w-4xl justify-center gap-6 ",)}>

        <img src="/img.jpg" height={110} width={141} className="rounded-3xl"></img>
        <p className={clsx("text-xl font-serif")}>Shah M. Arhum - Software Engineer and a music Geek. Love video games.</p>

        <div className="flex flex-col gap-2 rounded-3xl text-justify">
          <h1 className="font-extrabold tracking-wide text-2xl sm:text-4xl">// phil's osophy</h1>
          <p className="text-base text-gray-700">
            {"Portfolio- /pɔːtˈfəʊliəʊ/."}
          </p>
          <p className="italic text-sm"> a set of pieces of creative work intended to demonstrate a person's ability to a potential employer. </p>
          <hr className="text-gray-400 mt-5" />

            <p>
            I actually recommend checking out my personal space compared to this; But to each their own.. Also, I now have a {" "}
            <a href="/resume" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
              dedicated page for my resume. check it out here.
            </a>
            </p>

          <br />

            <div className="flex flex-row gap-3 overflow-x-auto">
            {bigLinks.map((i) => {
            return (
              <Button
              key={i.title}
              variant="bordered"
              as={"a"}
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(`py-6 px-5 mt-2 min-w-[200px] min-h-[120px] bg-gray-200 text-lg text-gray-800 font-black border-1 flex flex-col items-center justify-center gap-2 ${i.hoverStyle}`, nunito.className)}
              radius={"lg"}
              >
              <i.icon size={24} />
              {i.title}
              </Button>
            )
            })}
            </div>
        </div>
        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <h1 className="font-extrabold tracking-wide text-2xl sm:text-4xl">// work</h1>

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
          <h1 className="font-extrabold tracking-wide text-2xl sm:text-4xl">// selected projects</h1>
          <div className="flex flex-col gap-7 text-justify">
            {projects.map((item) => {
              const colors = getStatusColors(item.status);

              return (
                <div key={item.title} className="flex flex-col">

                  <a href={item.projectLink ? item.projectLink : ""} id="po-trigger" className="inline-flex w-full min-w-0 items-center gap-1 text-lg font-semibold cursor-pointer hover:text-blue-600">
                    <span className="truncate">{item.title}</span>
                    <ArrowUpRight size={20} className="flex-shrink-0" />
                  </a>

                  {item.projectDesc.map((descLine, idx) =>
                    <p key={idx+1} className="text-gray-600 text-sm">{descLine}</p>
                  )}

                  <div className="flex flex-row gap-1 mt-2">

                    <div className="flex border-1 border-gray-300 rounded-xl flex-row gap-2 py-1 px-2">
                      {item.images.map((img) => (
                        <img key={img} height={20} width={20} src={img} />
                      ))}
                    </div>
                    <p
                      className={clsx(
                        "inline-flex items-center justify-center leading-none text-xs px-3 py-1 border rounded-3xl font-medium",
                        colors.bg,
                        colors.text,
                        colors.border,
                        jbMono.className
                      )}
                    >
                      {item.status.toUpperCase()}
                    </p>

                  </div>
                </div>
              )
            }
            )}
          </div>
        </div>

        <br />

        <div className="flex flex-col gap-2 rounded-3xl">
          <h1 className="font-extrabold tracking-wide text-2xl sm:text-4xl">// education</h1>

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
          <h1 className="font-extrabold tracking-wide text-2xl sm:text-4xl">// other links</h1>

          <br />

            <div className="flex flex-row gap-2 overflow-x-auto text-justify sm:justify-start justify-between">
            {links.map((item) => (
              <Button
              isIconOnly={false}
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
