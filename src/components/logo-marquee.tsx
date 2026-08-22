const marks = [
  "MEA · Government of India",
  "eMigrate Verified",
  "ISO 9001:2015",
  "GAMCA Approved Medicals",
  "Schengen Work Permits",
  "GCC Labour Attestation",
  "US EB-3 Corridor",
  "Apostille & Legalisation",
];

export function LogoMarquee({ className = "" }: { className?: string }) {
  const row = [...marks, ...marks];

  return (
    <section className={`border-b border-border bg-background py-7 ${className}`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6">
        <div className="flex w-max animate-marquee items-center gap-10">
          {row.map((mark, i) => (
            <span
              key={`${mark}-${i}`}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm sm:text-base font-semibold text-muted-foreground"
            >
              <span className="size-2 rounded-full bg-ember" />
              {mark}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
