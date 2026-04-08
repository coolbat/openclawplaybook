import type { HTMLAttributes, IframeHTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";

type CalloutProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
};

function Callout({ title, className, children, ...props }: CalloutProps) {
  const classes = ["callout", "mdx-callout", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {title ? <p className="mdx-callout-title">{title}</p> : null}
      <div>{children}</div>
    </div>
  );
}

type FigureProps = HTMLAttributes<HTMLElement> & {
  src: string;
  alt: string;
  caption?: string;
};

function Figure({ src, alt, caption, className, ...props }: FigureProps) {
  const classes = ["mdx-figure", className].filter(Boolean).join(" ");

  return (
    <figure className={classes} {...props}>
      <img alt={alt} className="mdx-image" src={src} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

type VideoEmbedProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  title: string;
  src: string;
};

function VideoEmbed({ className, title, src, ...props }: VideoEmbedProps) {
  const classes = ["mdx-video", className].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        src={src}
        title={title}
        {...props}
      />
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  Callout,
  Figure,
  VideoEmbed,
};
