import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { PageContainer } from "@/components/PageContainer";
import { ThoughtsBuildingDigitalMindPage } from "@/pages/thoughts/ThoughtsBuildingDigitalMindPage";
import { ThoughtsRaefordResearchPage } from "@/pages/thoughts/ThoughtsRaefordResearchPage";
import { ThoughtsTemplatePage } from "@/pages/thoughts/ThoughtsTemplatePage";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      return;
    }

    rootElement.classList.remove("dark");
    window.localStorage.setItem("theme", "light");
  }, [isDarkMode]);

  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const thoughtPageByPath: Array<[string, JSX.Element]> = [
    ["/thoughts/building-a-digital-mind", <ThoughtsBuildingDigitalMindPage isDarkMode={isDarkMode} />],
    ["/thoughts/thoughts-template", <ThoughtsTemplatePage isDarkMode={isDarkMode} />],
    ["/thoughts/template", <ThoughtsTemplatePage isDarkMode={isDarkMode} />],
    ["/thoughts/raeford-research", <ThoughtsRaefordResearchPage isDarkMode={isDarkMode} />],
    ["/beginnings", <ThoughtsBuildingDigitalMindPage isDarkMode={isDarkMode} />],
  ];
  const currentThoughtPage = thoughtPageByPath.find(([routePath]) =>
    currentPath === routePath || currentPath.endsWith(routePath),
  )?.[1];

  return (
    <body className="text-zinc-900 text-lg not-italic proportional-nums font-normal accent-auto bg-gray-100 box-border caret-transparent block tracking-[-0.27px] leading-[28.8px] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sn_pro dark:bg-[#424530] dark:text-white">
      <button
        type="button"
        onClick={() => setIsDarkMode((current) => !current)}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="fixed right-6 top-6 z-[200] inline-flex h-12 w-24 items-center justify-center rounded-2xl border border-zinc-300 bg-zinc-100 text-zinc-900 transition hover:bg-zinc-200 dark:border-zinc-600 dark:bg-[#2d2f22] dark:text-zinc-100 dark:hover:bg-[#383b2a]"
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
      {currentThoughtPage ?? <PageContainer isDarkMode={isDarkMode} />}
      <div className="box-border caret-transparent"></div>
    </body>
  );
};
