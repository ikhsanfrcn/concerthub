export const HeroContent: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col space-y-[16px]">
        <h1 className="text-[44px] font-bold">Beyoncé Live in Concert!</h1>
        <p className="text-[24px] text-neutral-600 font-semibold">A Night to Remember!</p>
        <div className="text-neutral-500">
          <p className="text-[18px] w-[501px]">
            Get ready for an extraordinary night with Beyoncé with breathtaking
            performances and unforgettable moments.
          </p>
          <p className="mt-[5px] text-[18px]">
            Don’t wait – secure your tickets{" "}
          </p>
        </div>
      </div>
      <button className="mt-[48px] bg-primary-500 hover:bg-blue-700 text-white font-bold px-[48px] py-[20px] rounded-2xl">
        Get Ticket
      </button>
    </div>
  );
};
