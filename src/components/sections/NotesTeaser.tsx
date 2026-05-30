import { NoteCard } from "@/components/cards/NoteCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllNotes } from "@/lib/notes";

export function NotesTeaser() {
  const notes = getAllNotes().slice(0, 3);

  return (
    <section className="section bg-white">
      <SectionHeader
        eyebrow="/ Notes"
        title="Short notes for research practice, paper reading, and technical reflection."
        description="A lightweight notebook for ideas that are not yet papers."
        action={
          <ButtonLink href="/notes" variant="dark">
            Read notes
          </ButtonLink>
        }
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </section>
  );
}
