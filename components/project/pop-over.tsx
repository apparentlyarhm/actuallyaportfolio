import { Project } from "@/config/data/projects";
import { bitter, jbMono, nunito } from "@/config/fonts";
import { Button } from "@heroui/button"
import clsx from "clsx";
import { ExternalLink } from "lucide-react";

interface ProjectPopoverProps {
  project: Project;
}
export default function ProjectPopover({ project }: ProjectPopoverProps) {

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
  const colors = statusColors[project.status] ?? statusColors["unreleased"];
  return (
    <div
      id="popover-content"
      className={`px-3 py-3 flex flex-col gap-2 rounded-xl border ${colors.bg} ${colors.border} transition-colors duration-200`}
    >
      <p className={clsx(`text-xs text-center font-medium uppercase ${colors.text}`, jbMono.className)}>
        -{project.status}-
      </p>

      <h3 className={clsx("text-base font-semibold text-gray-900", bitter.className)}>
        {project.title}
      </h3>

      <div className="mt-1">
        <a
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            color="primary"
            variant="flat"
            className="p-4 flex items-center gap-1"
          >
            <span className={clsx("text-sm font-bold", nunito.className)}>Visit</span>
            <ExternalLink size={14} className="ml-1" />
          </Button>
        </a>
      </div>
    </div>
  );
}