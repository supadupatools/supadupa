import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

type FooterProps = {
  isDarkMode: boolean;
};

export const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer className="text-neutral-500 text-[14.4px] box-border caret-transparent leading-[23.04px] max-w-[648px] mx-[8%] my-[72px] md:mb-[108px] md:mx-[14%] dark:text-zinc-200">
      <div className="box-border caret-transparent mb-2.5">
        <SocialLinks isDarkMode={isDarkMode} />
      </div>
      <div className="text-neutral-400 box-border caret-transparent dark:text-zinc-300">
        @ 2026 Supa Dupa Tools
      </div>
    </footer>
  );
};
