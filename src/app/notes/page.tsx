import type { Metadata } from "next";
import { NoteCard } from "@/components/cards/NoteCard";
import { noteCategories } from "@/data/notes";
import { getAllNotes } from "@/lib/notes";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Notes",
  "Research notes, paper reading, technical reflections, and short essays by Thinh Nguyen (Lucaz).",
  "/notes",
);

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <section className="section bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="section-label">/ Notes</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.36fr] lg:items-end">
          <div>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl">
              Research notes for ideas in progress.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              A place for paper reading, technical reflections, and short essays. Initial entries are intentionally marked as drafts/placeholders.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {noteCategories.map((category) => (
              <span key={category} className="rounded-full border border-neutral-950/10 bg-white/65 px-3 py-1.5 text-sm font-semibold text-neutral-600">
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </div>
    </section>
  );
}
