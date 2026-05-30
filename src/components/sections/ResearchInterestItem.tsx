import { TagList } from "@/components/ui/TagList";

type ResearchInterestItemProps = {
  number: string;
  title: string;
  description: string;
  tags: readonly string[];
};

export function ResearchInterestItem({ number, title, description, tags }: ResearchInterestItemProps) {
  return (
    <article className="grid gap-6 border-t border-neutral-950/10 py-8 sm:grid-cols-[8rem_1fr] lg:grid-cols-[10rem_1fr_26rem] lg:gap-10">
      <span className="font-serif text-5xl italic text-neutral-300">{number}</span>
      <div>
        <h3 className="text-3xl font-semibold tracking-tight text-neutral-950">{title}</h3>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">{description}</p>
      </div>
      <TagList tags={tags} className="self-start lg:justify-end" />
    </article>
  );
}
