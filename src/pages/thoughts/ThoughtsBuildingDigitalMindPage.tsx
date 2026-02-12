import { Article } from "@/pages/thoughts/Article";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

type ThoughtsBuildingDigitalMindPageProps = {
  isDarkMode: boolean;
};

export const ThoughtsBuildingDigitalMindPage = ({ isDarkMode }: ThoughtsBuildingDigitalMindPageProps) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="relative box-border caret-transparent min-h-[1000px] overflow-hidden dark:bg-[#424530] dark:text-white">
      <nav className="absolute text-zinc-500 text-[14.4px] box-border caret-transparent leading-[23.04px] text-left w-full z-[120] mt-9 mx-[8%] top-0 md:mx-9">
        <a
          aria-label="Home"
          href="./"
          className="box-border caret-transparent leading-[17.1px] hover:text-zinc-900 hover:border-b-zinc-900 hover:border-l-neutral-500 hover:border-r-neutral-500 hover:border-t-neutral-500"
        >
          <img
            src={isDarkMode ? `${baseUrl}images/supadupa-white.png` : `${baseUrl}images/supadupa-color.png`}
            alt="Supa Dupa logo"
            className="box-border caret-transparent -ml-1 h-10 w-auto"
          />
        </a>
      </nav>
      <main className="box-border caret-transparent">
        <Article />
      </main>
      <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-zinc-300 box-border caret-transparent mx-[10%] border-b-0 border-x-0" />
      <footer className="text-neutral-500 text-[14.4px] box-border caret-transparent leading-[23.04px] max-w-[648px] mx-[8%] my-[72px] md:mb-[108px] md:mx-[14%]">
        <div className="box-border caret-transparent mb-2.5">
          <SocialLinks isDarkMode={isDarkMode} />
        </div>
        <div className="text-neutral-400 box-border caret-transparent">
          @ 2026 Supa Dupa Tools
        </div>
      </footer>
    </div>
  );
};
