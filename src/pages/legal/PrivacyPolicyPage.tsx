import { PrivacyPolicyArticle } from "@/pages/legal/PrivacyPolicyArticle";
import { ThoughtsPageLayout } from "@/pages/thoughts/ThoughtsPageLayout";

type PrivacyPolicyPageProps = {
  isDarkMode: boolean;
};

export const PrivacyPolicyPage = ({ isDarkMode }: PrivacyPolicyPageProps) => {
  return (
    <ThoughtsPageLayout isDarkMode={isDarkMode}>
      <PrivacyPolicyArticle />
    </ThoughtsPageLayout>
  );
};
