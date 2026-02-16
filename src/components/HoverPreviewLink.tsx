type HoverPreviewLinkProps = {
  href?: string;
  previewImage?: string;
  previewTitle: string;
  previewDescription: string;
  previewVariant?: "image" | "production";
  className: string;
  children: React.ReactNode;
};

export const HoverPreviewLink = ({
  href,
  previewImage,
  previewTitle,
  previewDescription,
  previewVariant = "image",
  className,
  children,
}: HoverPreviewLinkProps) => {
  const baseUrl = import.meta.env.BASE_URL;

  const previewCard = (
    <div className="pointer-events-none absolute left-[calc(100%+14px)] top-1/2 z-50 hidden w-[300px] -translate-y-1/2 opacity-0 transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100 xl:block">
      {previewVariant === "production" ? (
        <div className="overflow-hidden rounded-2xl border border-zinc-300/90 bg-zinc-100 shadow-[0_20px_45px_rgba(0,0,0,0.25)] dark:border-zinc-700/70 dark:bg-zinc-900 dark:shadow-[0_20px_45px_rgba(0,0,0,0.5)]">
          <div className="grid h-36 place-items-center bg-zinc-100 dark:bg-zinc-800/80">
            <div className="flex items-center gap-4">
              <span className="h-4 w-8 rounded-full bg-zinc-300 [animation:preview-blink_2.9s_ease-in-out_infinite] [transform-origin:center] group-hover:[animation:preview-blink_1.9s_ease-in-out_infinite] group-focus-within:[animation:preview-blink_1.9s_ease-in-out_infinite] dark:bg-zinc-500/70" />
              <span className="h-8 w-12 rounded-full bg-amber-400 shadow-[inset_0_-2px_0_rgba(0,0,0,0.08)]" />
              <span className="h-4 w-8 rounded-full bg-zinc-300 [animation:preview-blink_2.9s_ease-in-out_infinite] [animation-delay:110ms] [transform-origin:center] group-hover:[animation:preview-blink_1.9s_ease-in-out_infinite] group-focus-within:[animation:preview-blink_1.9s_ease-in-out_infinite] dark:bg-zinc-500/70" />
            </div>
          </div>
          <div className="border-t border-zinc-300/90 bg-white px-4 py-3 dark:border-zinc-700/70 dark:bg-zinc-900">
            <div className="text-[18px] font-medium leading-[1.2] text-zinc-800 dark:text-zinc-100">
              {previewTitle}
            </div>
            <p className="mt-2 text-[13px] leading-[1.35] text-zinc-500 dark:text-zinc-400">
              {previewDescription}
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-950 shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
          <div className="bg-zinc-200 p-3">
            <img
              src={`${baseUrl}${previewImage ?? ""}`}
              alt={previewTitle}
              className="h-32 w-full rounded-xl border border-zinc-300 object-cover shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
            />
          </div>
          <div className="border-t border-zinc-700/70 bg-zinc-950 px-4 py-3">
            <div className="text-[18px] font-medium leading-[1.2] text-zinc-100">
              {previewTitle}
            </div>
            <p className="mt-2 text-[13px] leading-[1.35] text-zinc-400">
              {previewDescription}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  const content = <div className={className}>{children}</div>;

  if (href) {
    return (
      <a href={href} className="group relative z-0 block hover:z-[70] focus-visible:z-[70]">
        {content}
        {previewCard}
      </a>
    );
  }

  return (
    <div className="group relative z-0 block hover:z-[70] focus-within:z-[70]">
      {content}
      {previewCard}
    </div>
  );
};
