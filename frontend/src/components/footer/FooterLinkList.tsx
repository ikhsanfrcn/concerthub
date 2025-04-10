import { FooterLink } from "./FooterLink";


export const FooterLinkList = ({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) => (
  <div className="flex flex-col text-white">
    <h4 className="text-lg font-semibold">{title}</h4>
    <ul className="mt-4 space-y-2 text-sm">
      {links.map((link) => (
        <FooterLink key={link.label} label={link.label} href={link.href} />
      ))}
    </ul>
  </div>
)
