import { AddOnsObj } from "./Objects";

const AddOns = () => {
  return (
    <div className="bg-white mx-4 rounded-[10px] py-8 px-6 mt-[-74px] shadow-custom md:mx-0 md:mt-10 md:shadow-none md:rounded-none md:p-0 md:pr-[84px]">
      <h1 className="text-Denim text-2xl md:text-[32px]">Pick add-ons</h1>
      <p className="text-Grey text-base mt-[9px] mb-[22px] md:mt-[11px] md:mb-[35px]">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-3">
        {AddOnsObj.map((items) => (
          <label
            htmlFor={items.name}
            key={items.id}
            className="grid grid-flow-col items-center gap-4 grids border-[#D6D9E6] rounded-lg border-[1px] pt-[14px] pb-[18px] px-4 md:px-6 md:w-[42.8vw] md:max-w-[450px]"
          >
            <input
              type="checkbox"
              id={items.name}
              className="appearance-none color-black w-5 h-5 border-[1px] border-[#D6D9E6] rounded checked:bg-[#483EFF] checked:after:content-['✔']
              checked:after:text-white checked:after:ml-[3px] checked:after:relative checked:after:top-[-2.5px]"
            />
            <div>
              <h2 className="text-Denim text-base">{items.name}</h2>
              <p className="text-Grey text-xs mt-1 md:text-[15px]">
                {items.text}
              </p>
            </div>
            <p className="text-[#483EFF] text-xs md:text-[15px]">
              +${items.price}/mo
            </p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AddOns;
