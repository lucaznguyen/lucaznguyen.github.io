import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { TagList } from "@/components/ui/TagList";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { createPageMetadata } from "@/lib/metadata";
import { formatShortDate } from "@/lib/utils";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllNotes().map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return createPageMetadata("Note", "Research note by Thinh Nguyen (Lucaz).", `/notes/${slug}`);
  }

  return createPageMetadata(note.title, note.description, `/notes/${note.slug}`);
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <article className="section bg-cream">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <div className="border-b border-neutral-950/10 pb-10">
          <p className="section-label">/ Note</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl">
            {note.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">{note.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold text-neutral-500">
            <span>{formatShortDate(note.date)}</span>
            <span>{note.readingTime}</span>
            {note.draft ? (
              <span className="rounded-full bg-vin-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-vin-red">
                Draft / Placeholder
              </span>
            ) : null}
          </div>
          <TagList tags={note.tags} className="mt-6" />
        </div>
        <div className="prose-like pt-4">
          <MarkdownRenderer content={note.content} />
        </div>
      </div>
    </article>
  );
}
