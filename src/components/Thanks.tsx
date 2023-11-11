import thanks from "../assets/icon-thank-you.svg";

const Thanks = () => {
  return (
    <div className="bg-white mx-4 rounded-[10px] py-[79px] px-6 mt-[-74px] shadow-custom text-center md:m-0 md:shadow-none md:rounded-none md:p-0">
      <img
        src={thanks}
        alt="thanks icon"
        className="w-[56px] h-[56px] inline-block text-center"
      />
      <h1 className="text-Denim text-2xl mt-6 mb-[9px]">Thank you!</h1>
      <p className="text-Grey text-base">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thanks;
