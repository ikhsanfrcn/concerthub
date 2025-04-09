import Link from "next/link";

type IconProps = {
    Component: React.ComponentType<React.SVGProps<SVGSVGElement>>
    link?: string;
    target?: string;
    className?: string;
    rel?: string;
    label?: string;
}

export const Icon: React.FC<IconProps> = ({ Component, target, className, rel, link, label }) => {
    if (link) {
        return (
            <Link href={link} target={target} rel={rel} className={`flex items-center space-x-[8px] text-[24px] text-neutral-300 ${className}`}>
                <Component />
                <p className="text-[20px] text-neutral-800">{label}</p>
            </Link>
        )
    }
    return <Component className={className} />
}