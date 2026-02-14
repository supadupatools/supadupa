import { ThoughtsPageLayout } from "@/pages/thoughts/ThoughtsPageLayout";
import { ThoughtsTemplateArticle } from "@/pages/thoughts/ThoughtsTemplateArticle";

type ThoughtsTemplatePageProps = {
  isDarkMode: boolean;
};

export const ThoughtsTemplatePage = ({ isDarkMode }: ThoughtsTemplatePageProps) => {
  return (
    <ThoughtsPageLayout isDarkMode={isDarkMode}>
      <ThoughtsTemplateArticle />
    </ThoughtsPageLayout>
  );
};
