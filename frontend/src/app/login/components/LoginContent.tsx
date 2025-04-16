import Image from "next/image";

interface Props {
    className?: string;
}

export const LoginContent: React.FC<Props> = ({className}) => {
  return (
    <div className={`${className}`}>
      <Image src={"/loginimage.png"} width={0} height={0} sizes="100" alt="" className="h-screen w-full" />
    </div>
  );
};
