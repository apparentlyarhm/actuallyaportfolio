import { GDRIVE_SLUG, RESUME_ICON } from "@/config/data/socials";
import { nunito } from "@/config/fonts";
import { Button } from "@heroui/button";
import clsx from "clsx";
import { HomeIcon } from "lucide-react";

export default function Res() {
    return (
        <div className="resume-page">
            <div className="mx-auto max-w-full flex-grow resume-content">
                <p className="font-semibold font-mono text-lg bg-rose-500 text-slate-100 p-4 rounded-xl sm:text-3xl text-left">View or download my resume (or both)</p>
                <div className="flex flex-row gap-4">
                    <Button
                        key={"Get"}
                        variant="bordered"
                        as={"a"}
                        href={RESUME_ICON.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        endContent={<RESUME_ICON.icon size={20} />}
                        className={clsx(
                            `py-6 px-5 text-lg text-gray-800 font-black 
                            border-1 items-center justify-center gap-2 
                            ${RESUME_ICON.hoverStyle}`,
                            nunito.className
                        )}
                        radius={"full"}
                    >
                    </Button>

                    <Button
                        key={"Home"}
                        variant="bordered"
                        as={"a"}
                        href={"/"}
                        endContent={<HomeIcon size={20} />}
                        className={clsx(
                            `py-6 text-lg text-gray-800 font-black 
                            border-1 items-center justify-center gap-2
                             hover:border-gray-400 hover:text-gray-100 hover:bg-black`,
                            nunito.className
                        )}
                        radius={"full"}
                    >
                    </Button>
                </div>

                <div className="resume-frame-wrapper">
                    <iframe
                        src={`${GDRIVE_SLUG}/preview`}
                        className="resume-frame"
                        title="Resume Preview"
                    />
                </div>
                <p className="text-rose-500 font-mono text-xs text-left">HINT: Its best to just visit Google Drive directly on mobile. iframes are a pain</p>
            </div>
        </div>
    );
}