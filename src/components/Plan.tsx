import { PlanObj } from "./Objects";
import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";

const Plan = () => {
  const images: { [key: string]: string } = {
    Arcade: arcade,
    Advanced: advanced,
    Pro: pro,
  };

  return (
    <div className="bg-white mx-4 rounded-[10px] py-8 px-6 mt-[-74px] shadow-custom md:mx-0 md:mt-10 md:shadow-none md:rounded-none md:p-0 md:pr-[84px]">
      <h1 className="text-Denim text-2xl md:text-[32px]">Select your plan</h1>
      <p className="text-Grey text-base mt-[9px] mb-[22px] md:mt-[11px] md:mb-[35px]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-3 md:flex-row md:max-w-[450px]">
        {PlanObj.map((items) => (
          <div
            key={items.id}
            className="flex items-center gap-[14px] border-[#D6D9E6] rounded-lg border-[1px] pt-[14px] pb-[18px] pl-4 md:grid
            md:items-start md:py-5 md:w-[12.188vw] md:pr-9"
          >
            <img
              src={images[items.name]}
              alt={items.name}
              className="w-10 h-10"
            />
            <div>
              <h2 className="text-Denim text-base">{items.name}</h2>
              <p className="text-Grey text-sm mt-1">${items.price}/mo</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 bg-[#F8F9FF] mt-6 pt-[13px] pb-[14px]">
        <h3 className="text-Denim text-sm">Monthly</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="20"
          viewBox="0 0 38 20"
          fill="none"
        >
          <rect width="38" height="20" rx="10" fill="#022959" />
          <circle cx="10" cy="10" r="6" fill="white" />
        </svg>
        <h3 className="text-Grey text-sm">Yearly</h3>
      </div>
    </div>
  );
};

export default Plan;
