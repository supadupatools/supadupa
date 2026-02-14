import { Article } from "@/pages/thoughts/Article";
import { ThoughtsPageLayout } from "@/pages/thoughts/ThoughtsPageLayout";

type ThoughtsBuildingDigitalMindPageProps = {
  isDarkMode: boolean;
};

export const ThoughtsBuildingDigitalMindPage = ({ isDarkMode }: ThoughtsBuildingDigitalMindPageProps) => {
  return (
    <ThoughtsPageLayout isDarkMode={isDarkMode}>
      <Article />
    </ThoughtsPageLayout>
  );
};
