import { Reveal } from "@/components/motion/Reveal";

type StatCardProps = {
  value: string;
  suffix: string;
  label: string;
  detail: string;
  index?: number;
};

export function StatCard({ value, suffix, label, detail, index = 0 }: StatCardProps) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="group min-h-48 rounded-[2rem] border border-neutral-950/10 bg-white/65 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-vin-red/30 hover:bg-white">
        <div className="flex items-start justify-between gap-4">
          <p className="font-serif text-5xl italic tracking-tight text-neutral-950">
            {value}
            {suffix ? <span className="ml-1 text-2xl text-vin-red">{suffix}</span> : null}
          </p>
          <span className="rounded-full border border-neutral-950/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            0{index + 1}
          </span>
        </div>
        <h3 className="mt-8 text-xl font-semibold tracking-tight text-neutral-950">{label}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{detail}</p>
      </article>
    </Reveal>
  );
}
