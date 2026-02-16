import { TermsOfServiceArticle } from "@/pages/legal/TermsOfServiceArticle";
import { ThoughtsPageLayout } from "@/pages/thoughts/ThoughtsPageLayout";

type TermsOfServicePageProps = {
  isDarkMode: boolean;
};

export const TermsOfServicePage = ({ isDarkMode }: TermsOfServicePageProps) => {
  return (
    <ThoughtsPageLayout isDarkMode={isDarkMode}>
      <TermsOfServiceArticle />
    </ThoughtsPageLayout>
  );
};
