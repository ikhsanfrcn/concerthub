import Image from "next/image"

interface MCProps {
    image: string;
    name: string;
}

export const CategoryCard: React.FC<MCProps> = ({ image, name }) => {
    return (
        <>
            <div className="relative rounded-2xl">
                <Image
                    src={image}
                    width={231}
                    height={200}
                    alt=""
                    className="w-[156px] md:w-full h-[156px] md:h-[200px] rounded-2xl"
                />
                <p className="absolute bottom-0 w-full text-center py-[14px] text-[26px] bg-black/50 text-white rounded-2xl">
                    {name}</p>
            </div>
        </>
    )
}