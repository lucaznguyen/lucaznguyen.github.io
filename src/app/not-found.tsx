import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="section min-h-[60vh] bg-cream">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10">
        <p className="section-label">/ 404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl">
          This page has drifted out of distribution.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
          The page you requested does not exist or has moved.
        </p>
        <div className="mt-8">
          <ButtonLink href="/" variant="dark">
            Return home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
