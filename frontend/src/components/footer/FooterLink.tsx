'use client'

import Link from 'next/link'

export const FooterLink = ({ label, href }: { label: string; href: string }) => (
  <li>
    <Link href={href} className="hover:underline transition">
      {label}
    </Link>
  </li>
)
