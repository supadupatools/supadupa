import { RaefordResearchArticle } from "@/pages/thoughts/RaefordResearchArticle";
import { ThoughtsPageLayout } from "@/pages/thoughts/ThoughtsPageLayout";

type ThoughtsRaefordResearchPageProps = {
  isDarkMode: boolean;
};

export const ThoughtsRaefordResearchPage = ({ isDarkMode }: ThoughtsRaefordResearchPageProps) => {
  return (
    <ThoughtsPageLayout isDarkMode={isDarkMode}>
      <RaefordResearchArticle />
    </ThoughtsPageLayout>
  );
};
