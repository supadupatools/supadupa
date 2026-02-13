import { useEffect } from "react";
import { HoverPreviewLink } from "@/components/HoverPreviewLink";

type ContentWrapperProps = {
  isDarkMode: boolean;
};

export const ContentWrapper = ({ isDarkMode }: ContentWrapperProps) => {
  useEffect(() => {
    const logoSources = [
      "images/supadupa-logo.png",
      "images/supa-dupa-logo-darkmode.png",
    ];

    logoSources.forEach((source) => {
      const image = new Image();
      image.src = source;
    });
  }, []);

  return (
    <div className="box-border caret-transparent max-w-[936px] ml-[14%] mr-[6%] mt-0 mb-[108px]">
      <section className="box-border caret-transparent">
        <div className="text-neutral-600 box-border caret-transparent gap-x-[27px] flex flex-col gap-y-[27px] mt-[54px] md:gap-x-9 md:flex-row md:gap-y-9 dark:text-zinc-200">
          <div className="relative box-border caret-transparent max-w-full w-[297px] z-[2] -ml-4 mb-5">
            <img
              alt="Supa Dupa logo"
              src={
                isDarkMode
                  ? "images/supa-dupa-logo-darkmode.png"
                  : "images/supadupa-logo.png"
              }
              className="box-border h-[420px] max-w-full w-full object-contain"
            />
          </div>
        </div>
        <div className="text-neutral-600 box-border caret-transparent gap-x-[27px] flex flex-col gap-y-[27px] mt-[54px] md:gap-x-9 md:flex-row md:gap-y-9 dark:text-zinc-100">
          <div className="box-border caret-transparent flex basis-[0%] min-w-0 flex-col grow md:min-h-[320px]">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px] dark:text-zinc-300">
              Thoughts
            </h2>
            <HoverPreviewLink
              href="beginnings"
              previewImage="images/supadupa-color.png"
              previewTitle="Sharper tools, smoother days."
              previewDescription="A short note on why we build small, useful tools that remove friction."
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500 dark:hover:text-white"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                supa dupa tools beginnings
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                small-but-supa software products
              </div>
            </HoverPreviewLink>
          </div>
          <div className="box-border caret-transparent flex basis-[0%] min-w-0 flex-col grow md:min-h-[320px]">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px] dark:text-zinc-300">
              Tools
            </h2>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                certden
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                data-driven certification exam prep platform
              </div>
            </div>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                butta
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                clean up file chaos
              </div>
            </div>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                stoop
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                envisioning your dream home
              </div>
            </div>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                raeford research
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                curated historical records, genealogy, and structured datasets.
              </div>
            </div>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                billydoo
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                see what&#39;s being read around you
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent flex basis-[0%] min-w-0 flex-col grow md:min-h-[320px]">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px] dark:text-zinc-300">
              FUN
            </h2>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                notion templates
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                overly complicated trackers
              </div>
            </div>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                carol font
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                fond love of parents hanwritting
              </div>
            </div>
            <div className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl">
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                tally
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                cpe tracker for professionals
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
