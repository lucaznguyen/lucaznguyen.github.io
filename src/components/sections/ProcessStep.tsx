type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <article className="group min-h-72 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-cream transition hover:-translate-y-1 hover:bg-white/[0.1]">
      <div className="flex items-center justify-between">
        <span className="font-serif text-5xl italic text-cream/35">{number}</span>
        <span className="size-3 rounded-full bg-vin-red" aria-hidden="true" />
      </div>
      <h3 className="mt-12 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 text-base leading-7 text-cream/65">{description}</p>
    </article>
  );
}
