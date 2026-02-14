type HoverPreviewLinkProps = {
  href: string;
  previewImage: string;
  previewTitle: string;
  previewDescription: string;
  className: string;
  children: React.ReactNode;
};

export const HoverPreviewLink = ({
  href,
  previewImage,
  previewTitle,
  previewDescription,
  className,
  children,
}: HoverPreviewLinkProps) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <a href={href} className={`group relative z-0 hover:z-[70] focus-visible:z-[70] ${className}`}>
      {children}

      <div className="pointer-events-none absolute left-0 top-[calc(100%+10px)] z-50 hidden w-[300px] opacity-0 transition duration-200 group-hover:opacity-100 xl:block">
        <div className="overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-950 shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
          <div className="bg-zinc-200 p-3">
            <img
              src={`${baseUrl}${previewImage}`}
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
      </div>
    </a>
  );
};
