import { useEffect } from "react";
import { HoverPreviewLink } from "@/components/HoverPreviewLink";

type ContentWrapperProps = {
  isDarkMode: boolean;
};

const toolItems = [
  {
    name: "certden",
    description: "data-driven certification exam prep platform",
    href: "https://www.certden.app",
    previewTitle: "CertDen",
    previewDescription: "Now live at www.certden.app.",
  },
  {
    name: "butta",
    description: "clean up file chaos",
  },
  {
    name: "stoop",
    description: "envisioning your dream home",
  },
  {
    name: "raeford research",
    description: "curated historical records, genealogy, and structured datasets.",
  },
  {
    name: "billydoo",
    description: "see what's being read around you",
  },
];

const funItems = [
  {
    name: "notion templates",
    description: "overly complicated trackers",
  },
  {
    name: "carol font",
    description: "fond love of parents hanwritting",
  },
  {
    name: "tally",
    description: "cpe tracker for professionals",
  },
];

export const ContentWrapper = ({ isDarkMode }: ContentWrapperProps) => {
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const logoSources = [
      "images/supadupa-logo.png",
      "images/supa-dupa-logo-darkmode.png",
    ];

    logoSources.forEach((source) => {
      const image = new Image();
      image.src = `${baseUrl}${source}`;
      image.decode?.().catch(() => undefined);
    });
  }, [baseUrl]);

  return (
    <div className="box-border caret-transparent max-w-[936px] ml-[14%] mr-[6%] mt-0 mb-[108px]">
      <section className="box-border caret-transparent">
        <div className="text-neutral-600 box-border caret-transparent gap-x-[27px] flex flex-col gap-y-[27px] mt-[54px] md:gap-x-9 md:flex-row md:gap-y-9 dark:text-zinc-200">
          <div className="relative isolate box-border caret-transparent max-w-full w-[297px] z-[2] -ml-4 mb-5">
            <div className="pointer-events-none absolute inset-x-10 bottom-14 top-28 z-0 rounded-[45%] bg-black/8 blur-xl dark:bg-black/25" />
            <img
              alt="Supa Dupa logo"
              src={
                isDarkMode
                  ? `${baseUrl}images/supa-dupa-logo-darkmode.png`
                  : `${baseUrl}images/supadupa-logo.png`
              }
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className="relative z-10 box-border h-[420px] max-w-full w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)] dark:drop-shadow-[0_24px_40px_rgba(0,0,0,0.65)] transform-gpu"
            />
          </div>
        </div>
        <div className="text-neutral-600 box-border caret-transparent gap-x-[27px] flex flex-col gap-y-[27px] mt-[54px] md:gap-x-9 md:flex-row md:gap-y-9 dark:text-zinc-100">
          <div className="box-border caret-transparent flex basis-[0%] min-w-0 flex-col grow md:min-h-[320px]">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px] dark:text-zinc-300">
              Thoughts
            </h2>
            <HoverPreviewLink
              href={`${baseUrl}#/beginnings`}
              previewImage="images/mountains_gradient_1920x1080_300dpi.png"
              previewOverlayImage="images/supadupa-logo-straight.png"
              previewOverlayClassName="left-[calc(50%+6px)]"
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
            <HoverPreviewLink
              href={`${baseUrl}#/thoughts/raeford-research`}
              previewImage="images/raeford-astro-logo.png"
              previewTitle="Raeford Research"
              previewDescription="a drive to discover"
              className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500 dark:hover:text-white"
            >
              <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                raeford research
              </div>
              <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                a drive to discover
              </div>
            </HoverPreviewLink>
          </div>
          <div className="box-border caret-transparent flex basis-[0%] min-w-0 flex-col grow md:min-h-[320px]">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px] dark:text-zinc-300">
              Tools
            </h2>
            {toolItems.map((item) => (
              <HoverPreviewLink
                key={item.name}
                href={item.href}
                previewVariant="production"
                previewTitle={item.previewTitle ?? "In Production"}
                previewDescription={
                  item.previewDescription ??
                  `${item.name} is in production. Public link coming soon.`
                }
                className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500 dark:hover:text-white"
              >
                <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                  {item.name}
                </div>
                <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                  {item.description}
                </div>
              </HoverPreviewLink>
            ))}
          </div>
          <div className="box-border caret-transparent flex basis-[0%] min-w-0 flex-col grow md:min-h-[320px]">
            <h2 className="text-neutral-400 text-[12.6px] font-medium box-border caret-transparent tracking-[4.725px] leading-[30px] uppercase my-[10.458px] dark:text-zinc-300">
              FUN
            </h2>
            {funItems.map((item) => (
              <HoverPreviewLink
                key={item.name}
                previewVariant="production"
                previewTitle="In Production"
                previewDescription={`${item.name} is in production. Public link coming soon.`}
                className="box-border caret-transparent block leading-[17.1px] max-w-full opacity-90 -ml-2 mr-auto p-2 rounded-xl hover:text-zinc-900 hover:bg-black/0 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500 dark:hover:text-white"
              >
                <div className="text-zinc-800 font-medium box-border caret-transparent lowercase mb-1 dark:text-white">
                  {item.name}
                </div>
                <div className="text-neutral-500 text-[14.4px] box-border caret-transparent max-w-full text-ellipsis lowercase text-nowrap overflow-hidden dark:text-zinc-200">
                  {item.description}
                </div>
              </HoverPreviewLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
