import Link from "next/link";
import { getRequestLocale } from "@/lib/i18n-server";
import { localizeHref } from "@/lib/i18n";

type LocalizedLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export async function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const locale = await getRequestLocale();
  return <Link {...props} href={localizeHref(href, locale)} />;
}
