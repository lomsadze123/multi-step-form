const Forms = () => {
  return (
    <div className="bg-white mx-4 rounded-[10px] py-8 px-6 mt-[-74px] shadow-custom">
      <h1 className="text-Denim text-2xl">Personal info</h1>
      <p className="text-Grey text-base mt-[9px] mb-[22px]">
        Please provide your name, email address, and phone number.
      </p>
      <form className="text-Denim text-xs flex flex-col gap-4">
        <label>
          Name <br />
          <input
            className="border-[#D6D9E6] bg-white rounded border-[1px] text-[15px] py-3 pl-4 w-full mt-[3px]"
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
