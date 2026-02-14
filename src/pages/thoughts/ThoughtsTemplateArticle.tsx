export const ThoughtsTemplateArticle = () => {
  return (
    <article className="box-border caret-transparent tracking-[-0.36px] max-w-[756px] mt-36 mb-[108px] mx-[8%] md:mx-[14%]">
      <div className="text-[16.2px] box-border caret-transparent leading-[25.92px] opacity-80">
        <span className="bg-[#F3A732] box-border caret-transparent inline-block basis-2 shrink-0 h-2 w-2 mr-2 rounded-[50%]"></span>
        <time className="box-border caret-transparent">Template Date.</time>
      </div>

      <h1 className="text-4xl font-medium text-zinc-900 dark:text-white box-border caret-transparent tracking-[-1.08px] leading-[43.2px] ml-[-1.8px] my-[18px]">
        Thoughts Template
      </h1>

      <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
        <small className="text-neutral-500 dark:text-zinc-300 text-[14.4px] box-border caret-transparent block leading-[20.16px] max-w-xs opacity-80 ml-px">
          Subtitle text example.
        </small>
      </p>

      <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
        This is regular paragraph text for a thought page template.
      </p>

      <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
        <mark className="text-black dark:text-white bg-transparent bg-[linear-gradient(-80deg,rgba(243,167,50,0.08),rgba(243,167,50,0.25)_90%,rgba(243,167,50,0.15))] box-border caret-transparent mb-[-3px] mt-[-3px] -mx-1.5 px-1.5 py-[3px] rounded-tl-[7.2px] rounded-tr-[18px] rounded-br-[10.8px] rounded-bl-[18px]">
          This sentence is highlighted to show mark formatting.
        </mark>
      </p>

      <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
        <span className="underline decoration-[#F3A732] decoration-2 underline-offset-4">
          This line demonstrates underlined emphasis.
        </span>
      </p>

      <p className="text-neutral-600 dark:text-zinc-200 box-border caret-transparent my-[18px]">
        Here is a link example:{" "}
        <a
          href="https://supadupa.tools"
          className="text-zinc-900 dark:text-white underline decoration-[#F3A732] decoration-2 underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          supadupa.tools
        </a>
      </p>
    </article>
  );
};
