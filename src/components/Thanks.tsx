import thanks from "../assets/icon-thank-you.svg";

const Thanks = () => {
  return (
    <div className="bg-white mx-4 rounded-[10px] py-[79px] px-6 mt-[-74px] shadow-custom text-center md:mx-0 md:my-auto md:shadow-none md:rounded-none md:p-0 md:pr-[84px]">
      <img
        src={thanks}
        alt="thanks icon"
        className="w-[56px] h-[56px] inline-block text-center md:w-[80px] md:h-[80px]"
      />
      <h1 className="text-Denim text-2xl mt-6 mb-[9px] md:text-[32px] md:mt-8 md:mb-[14px]">
        Thank you!
      </h1>
      <p className="text-Grey text-base">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thanks;
