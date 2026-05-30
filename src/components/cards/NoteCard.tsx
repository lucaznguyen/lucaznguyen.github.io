import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Note } from "@/lib/notes";
import { TagList } from "@/components/ui/TagList";
import { formatShortDate } from "@/lib/utils";

type NoteCardProps = {
  note: Note;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Link
      href={`/notes/${note.slug}`}
      className="group flex h-full min-h-72 flex-col rounded-[2rem] border border-neutral-950/10 bg-white/70 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-vin-red/30 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red"
    >
      <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        <span>{formatShortDate(note.date)}</span>
        <span>{note.readingTime}</span>
      </div>
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-950">{note.title}</h3>
      <p className="mt-4 text-base leading-7 text-neutral-600">{note.description}</p>
      <div className="mt-6">
        <TagList tags={note.tags} compact />
      </div>
      <div className="mt-auto flex items-center justify-between pt-8">
        {note.draft ? (
          <span className="rounded-full bg-vin-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-vin-red">
            Draft
          </span>
        ) : (
          <span className="text-sm font-semibold text-neutral-500">Note</span>
        )}
        <ArrowUpRight className="size-5 text-neutral-950 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-vin-red" />
      </div>
    </Link>
  );
}
