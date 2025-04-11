import Image from "next/image"

interface ArtisProps {
    image: string;
}

export const ArtisCard: React.FC<ArtisProps> = ({image}) => {
    return (
        <>
            <Image
                src={image}
                width={0}
                height={0}
                sizes="100"
                alt=""
                className="w-[119px] h-[119px] md:w-[184px] md:h-[184px] rounded-full"
            />
        </>
    )
}