import { cn } from "@/lib/utils";

type TagListProps = {
  tags: readonly string[];
  className?: string;
  compact?: boolean;
};

export function TagList({ tags, className, compact = false }: TagListProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded-full border border-neutral-950/10 bg-white/55 text-neutral-700",
            compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
