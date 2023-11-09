const Summary = () => {
  return (
    <div className="bg-white mx-4 rounded-[10px] py-8 px-6 mt-[-74px] shadow-custom">
      <h1 className="text-Denim text-2xl">Finishing up</h1>
      <p className="text-Grey text-base mt-[9px] mb-[22px]">
        Double-check everything looks OK before confirming.
      </p>
      <div className="p-4 bg-[#F8F9FF] rounded-[8.8px]">
        <div className="flex justify-between items-center">
          <span>
            <h2 className="text-Denim text-sm">Arcade (Monthly)</h2>
            <button className="text-Grey text-sm underline">Change</button>
          </span>
          <h4 className="text-Denim text-sm">$9/mo</h4>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between items-center">
          <p className="text-Grey text-sm">Online service</p>
          <h5 className="text-Denim text-sm">+$1/mo</h5>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="text-Grey text-sm">Larger storage</p>
          <h5 className="text-Denim text-sm">+$2/mo</h5>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mt-6">
        <p className="text-Grey text-base">Total (per month)</p>
        <h4 className="text-[#483EFF] text-base">+$12/mo</h4>
      </div>
    </div>
  );
};

export default Summary;
