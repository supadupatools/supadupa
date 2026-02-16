import { MainContent } from "@/components/MainContent";
import { Footer } from "@/sections/Footer";

type BackgroundWrapperProps = {
  isDarkMode: boolean;
};

export const BackgroundWrapper = ({ isDarkMode }: BackgroundWrapperProps) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="relative box-border caret-transparent min-h-[1000px] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.12] dark:opacity-[0.2]"
        style={{ backgroundImage: `url(${baseUrl}images/mountains_gradient_1920x1080_300dpi.png)` }}
      />
      <div className="relative z-10">
        <MainContent isDarkMode={isDarkMode} />
        <hr className="text-zinc-500 border-b-zinc-500 border-l-zinc-500 border-r-zinc-500 border-t-zinc-300 border-dotted box-border caret-transparent mx-[10%] border-b-0 border-x-0 dark:border-zinc-600 dark:text-zinc-500" />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};
