import whoWeAreImg from "@/assets/who-we-are-office.jpg";
import { ChipLink } from "@/components/page-shell";
import { FadeIn, AnimatedCounter } from "@/components/motion-primitives";

const tags = [
  { label: "MEA Licensed", highlight: true },
  { label: "Trade Tested" },
  { label: "eMigrate Filed" },
  { label: "Verified Employers" },
  { label: "24 Countries" },
];

export function WhoWeAre() {
  return (
    <section id="about" className="bg-background px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        <FadeIn direction="right" distance={30} duration={0.6}>
          <div className="rounded-lg bg-paper p-8 sm:p-10 shadow-xs border border-border">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-ember shadow-xs">
              <span className="size-1.5 rounded-full bg-ember" />
              Who We Are
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-brand-deep sm:text-4xl lg:text-[44px]">
              Driven by compliance,
              <br />
              guided by opportunity
            </h2>

            <figure className="relative mt-8 overflow-hidden rounded-lg border border-slate-200/80 shadow-md">
              <img
                src={whoWeAreImg}
                alt="Damoder Immigration Services executive airport desk and compliance documentation"
                className="h-[280px] w-full object-cover object-center sm:h-[320px] transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-lg px-3 py-1 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-md ${
                      tag.highlight ? "bg-ember text-white" : "bg-white/90 text-brand-deep border border-slate-200/50"
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </figcaption>
            </figure>
          </div>
        </FadeIn>

        <FadeIn direction="left" distance={30} duration={0.6} delay={0.15} className="lg:pl-4">
          <p className="font-display text-xl font-medium leading-[1.3] tracking-tight text-brand-deep sm:text-2xl lg:text-[28px]">
            We recruit, test, document and deploy skilled Indian workforce teams — with every stage
            tracked and every signature accounted for.
          </p>
          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            Our desks in Europe, the Gulf and the United States work directly with employers, so
            candidates never pass through unlicensed sub-agents. Trade testing happens in accredited
            centres, medicals in approved clinics, and every Gulf deployment is filed through the
            MEA eMigrate portal.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-brand">
                <AnimatedCounter value={18000} duration={1.6} />+
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Candidates deployed</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-brand">
                <AnimatedCounter value={600} duration={1.6} />+
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">Employer partners</p>
            </div>
          </div>
          <div className="mt-8">
            <ChipLink to="/about-us">Our story</ChipLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
