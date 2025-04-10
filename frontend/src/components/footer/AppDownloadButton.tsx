import { ReactNode } from 'react'

export const AppDownloadButton = ({
  icon,
  title,
  store,
}: {
  icon: ReactNode
  title: string
  store: string
}) => (
  <li className="flex items-center bg-white rounded-2xl px-8 py-2 shadow-md">
    {icon}
    <div className="ml-2 text-black">
      <p className="text-[8px] leading-tight">{title}</p>
      <p className="text-[12px] font-semibold leading-tight">{store}</p>
    </div>
  </li>
)
