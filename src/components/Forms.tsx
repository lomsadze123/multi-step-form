const Forms = () => {
  return (
    <div className="bg-white mx-4 rounded-[10px] py-8 px-6 mt-[-74px] shadow-custom md:mx-0 md:mt-10 md:shadow-none md:rounded-none md:p-0 md:pr-[84px]">
      <h1 className="text-Denim text-2xl md:text-[32px]">Personal info</h1>
      <p className="text-Grey text-base mt-[9px] mb-[22px] md:mt-[11px] md:mb-[35px]">
        Please provide your name, email address, and phone number.
      </p>
      <form className="text-Denim text-xs flex flex-col gap-4 md:text-sm  md:w-[42.8vw] md:max-w-[450px]">
        <label>
          Name <br />
          <input
            className="border-[#D6D9E6] bg-white rounded border-[1px] text-[15px] py-3 pl-4 w-full mt-[3px] md:mt-2"
            type="text"
            placeholder="e.g. Stephen King"
          />
          <br />
        </label>
        <label>
          Email Address
          <input
            className="border-[#D6D9E6] bg-white rounded border-[1px] text-[15px] py-3 pl-4 w-full mt-[3px]"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <br />
        </label>
        <label>
          Phone Number
          <input
            className="border-[#D6D9E6] bg-white rounded border-[1px] text-[15px] py-3 pl-4 w-full mt-[3px]"
            type="number"
            placeholder="e.g. +1 234 567 890"
          />
        </label>
      </form>
    </div>
  );
};

export default Forms;
