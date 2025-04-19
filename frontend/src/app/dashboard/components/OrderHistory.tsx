import { OrderHistoryCard } from "./OrderHistoryCard";

interface OrderHistoryProps {
  isVisible: boolean;
}

export const OrderHistory: React.FC<OrderHistoryProps> = (isVisible) => {
  if (!isVisible) return null;

  return (
    <div className="mt-[48px]">
      <div>
        <p className="text-[20px] text-secondary-800">Active concerts</p>
        <div className="mt-[16px]">
          <OrderHistoryCard />
        </div>
      </div>
      <div className="mt-[48px]">
        <p className="text-[20px] text-secondary-800">Past concerts</p>
        <div className="mt-[16px]">
          <OrderHistoryCard />
        </div>
      </div>
    </div>
  );
};
