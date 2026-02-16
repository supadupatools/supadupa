import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

type FooterProps = {
  isDarkMode: boolean;
};

export const Footer = ({ isDarkMode }: FooterProps) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="text-neutral-500 text-[14.4px] box-border caret-transparent leading-[23.04px] max-w-[648px] mx-[8%] mt-8 mb-[72px] md:mx-[14%] md:mt-10 md:mb-[108px] dark:text-zinc-200">
      <div className="box-border caret-transparent mb-2.5">
        <SocialLinks isDarkMode={isDarkMode} />
      </div>
      <div className="mb-3 flex items-center gap-3 text-[13.5px] text-neutral-500 dark:text-zinc-300">
        <a
          href={`${baseUrl}#/terms`}
          className="underline-offset-4 hover:text-zinc-700 hover:underline dark:hover:text-zinc-100"
        >
          Terms of Service
        </a>
        <span className="text-neutral-400/80 dark:text-zinc-500">|</span>
        <a
          href={`${baseUrl}#/privacy`}
          className="underline-offset-4 hover:text-zinc-700 hover:underline dark:hover:text-zinc-100"
        >
          Privacy Policy
        </a>
      </div>
      <div className="text-neutral-400 box-border caret-transparent dark:text-zinc-300">
        @ 2026 Supa Dupa Tools. All rights reserved.
      </div>
    </footer>
  );
};
