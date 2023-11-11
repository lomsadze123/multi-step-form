const NextButton = () => {
  return (
    <div className="bottom-0 left-0 right-0 flex flex-row-reverse justify-between bg-white p-4 mt-10 md:m-0 md:absolute md:max-w-[450px] md:left-[408px] md:bottom-5">
      <button className="text-Grey">Go Back</button>
      <button className="bg-Denim text-white rounded py-3 px-4">
        Next Step
      </button>
    </div>
  );
};

export default NextButton;
