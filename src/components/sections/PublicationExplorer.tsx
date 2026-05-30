"use client";

import { useMemo, useState } from "react";
import { publications, publicationFilters } from "@/data/publications";
import { PublicationCard } from "@/components/cards/PublicationCard";
import { cn } from "@/lib/utils";

const filters = ["All", ...publicationFilters] as const;

export function PublicationExplorer() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredPublications = useMemo(() => {
    if (activeFilter === "All") {
      return publications;
    }

    if (activeFilter === "Featured") {
      return publications.filter((publication) => publication.featured);
    }

    if (activeFilter === "Accepted" || activeFilter === "Preprint") {
      return publications.filter((publication) => publication.status === activeFilter);
    }

    return publications.filter((publication) =>
      publication.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase())),
    );
  }, [activeFilter]);

  return (
    <div>
      <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 sm:px-8 lg:px-10" role="list" aria-label="Publication filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red",
              activeFilter === filter
                ? "border-neutral-950 bg-neutral-950 text-white"
                : "border-neutral-950/10 bg-white/60 text-neutral-700 hover:border-neutral-950 hover:text-neutral-950",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        {filteredPublications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  );
}
