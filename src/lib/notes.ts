import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { estimateReadingTime } from "@/lib/utils";

const notesDirectory = path.join(process.cwd(), "src", "content", "notes");

export type Note = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
  content: string;
};

type NoteFrontmatter = {
  title?: string;
  date?: string;
  description?: string;
  tags?: string[];
  draft?: boolean;
};

function getNoteFiles() {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(notesDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

export function getAllNotes(): Note[] {
  return getNoteFiles()
    .map((file) => getNoteBySlug(file.replace(/\.mdx?$/, "")))
    .filter((note): note is Note => Boolean(note))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getNoteBySlug(slug: string): Note | null {
  const file = getNoteFiles().find((entry) => entry.replace(/\.mdx?$/, "") === slug);

  if (!file) {
    return null;
  }

  const fullPath = path.join(notesDirectory, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as NoteFrontmatter;

  return {
    slug,
    title: frontmatter.title ?? slug,
    date: frontmatter.date ?? new Date().toISOString(),
    description: frontmatter.description ?? "",
    tags: frontmatter.tags ?? [],
    draft: frontmatter.draft ?? false,
    readingTime: estimateReadingTime(content),
    content,
  };
}
