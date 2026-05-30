import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  content: string;
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 className="mt-12 text-3xl font-semibold tracking-tight text-neutral-950">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-950">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="mt-5 text-lg leading-8 text-neutral-700">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-neutral-700">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-8 text-neutral-700">{children}</ol>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="font-medium text-vin-red underline decoration-vin-red/30 underline-offset-4 transition hover:decoration-vin-red"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noreferrer" : undefined}
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="mt-8 border-l-2 border-vin-red pl-5 text-xl italic leading-8 text-neutral-800">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="rounded bg-neutral-950 px-1.5 py-0.5 text-sm text-neutral-50">{children}</code>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
