const Summary = ({
  click,
  choose,
  checked,
  setClick,
}: {
  click: boolean;
  choose: number;
  setClick: (click: boolean) => void;
  checked: {
    [key: number]: string;
  };
}) => {
  const prices = [9, 12, 15, "Arcade", "Advanced", "Pro"];
  const price = prices.slice(0, 3)[choose];
  const title = prices[choose + 3];
  const price2 =
    (checked[0] ? 1 : 0) + (checked[1] ? 2 : 0) + (checked[2] ? 2 : 0);

  return (
    <div className="bg-white mx-4 rounded-[10px] py-8 px-6 mt-[-74px] shadow-custom md:mx-0 md:mt-10 md:shadow-none md:rounded-none md:p-0 md:pr-[84px] ">
      <h1 className="text-Denim text-2xl md:text-[32px]">Finishing up</h1>
      <p className="text-Grey text-base mt-[9px] mb-[22px] md:mt-[11px] md:mb-[35px]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="p-4 bg-[#F8F9FF] rounded-[8.8px] md:w-[42.8vw] md:max-w-[450px]">
        <div className="flex justify-between items-center">
          <span>
            <h2 className="text-Denim text-sm md:text-base">
              {title} ({click ? "Yearly" : "Monthly"})
            </h2>
            <button
              onClick={() => setClick(!click)}
              className="text-Grey text-sm underline hover:text-[#483EFF]"
            >
              Change
            </button>
          </span>
          <h4 className="text-Denim text-sm md:text-base">
            ${price}
            {click && 0}/{click ? "yr" : "mo"}
          </h4>
        </div>
        <hr className="my-3 md:mt-6 md:mb-4" />
        {checked[0] && (
          <div className="flex justify-between items-center">
            <p className="text-Grey text-sm">Online service</p>
            <h5 className="text-Denim text-sm">
              +$1{click && 0}/{click ? "yr" : "mo"}
            </h5>
          </div>
        )}
        {checked[1] && (
          <div className="flex justify-between items-center mt-3 md:mt-4">
            <p className="text-Grey text-sm">Larger storage</p>
            <h5 className="text-Denim text-sm">
              +$2{click && 0}/{click ? "yr" : "mo"}
            </h5>
          </div>
        )}
        {checked[2] && (
          <div className="flex justify-between items-center mt-3 md:mt-4">
            <p className="text-Grey text-sm">Customizable profile</p>
            <h5 className="text-Denim text-sm">
              +$2{click && 0}/{click ? "yr" : "mo"}
            </h5>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center px-4 mt-6">
        <p className="text-Grey text-base">
          Total ({click ? "year" : "month"})
        </p>
        <h4 className="text-[#483EFF] text-base md:text-xl ">
          +${price2 + Number(price)}
          {click && 0}/{click ? "yr" : "mo"}
        </h4>
      </div>
    </div>
  );
};

export default Summary;
