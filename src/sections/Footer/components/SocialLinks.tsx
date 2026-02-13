type SocialLinksProps = {
  isDarkMode: boolean;
};

export const SocialLinks = ({ isDarkMode }: SocialLinksProps) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="box-border caret-transparent -ml-2 flex flex-row items-center gap-1.5">
      <a
        href="mailto:hello@supadupa.tools"
        className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
      >
        <img
          src={`${baseUrl}images/social/Mail.png`}
          alt="Icon"
          className="box-border caret-transparent h-8 w-8"
        />
      </a>
      <a
        href="https://instagram.com/supadupatools"
        className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
      >
        <img
          src={`${baseUrl}images/social/Instagram.png`}
          alt="Icon"
          className="box-border caret-transparent h-8 w-8"
        />
      </a>
      <a
        href="https://linkedin.com/company/supadupatools"
        className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
      >
        <img
          src={`${baseUrl}images/social/Linkedin.png`}
          alt="Icon"
          className="box-border caret-transparent h-8 w-8"
        />
      </a>
      <a
        href="https://github.com/supadupatools"
        className="box-border caret-transparent leading-[17.1px] p-0.5 hover:text-zinc-900 hover:border-b-zinc-900"
      >
        <img
          src={`${baseUrl}images/social/Github.png`}
          alt="Icon"
          className="box-border caret-transparent h-8 w-8"
        />
      </a>
    </div>
  );
};
