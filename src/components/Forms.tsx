import { FormValue } from "../App";

interface FormProps {
  register: object;
  handleSubmit: any;
  errors: object;
}
const Forms: React.FC<FormProps> = ({
  register,
  handleSubmit,
  errors,
}: any) => {
  const onSubmit = (data: FormValue) => {
    console.log("good", data);
  };

  return (
    <div className="bg-white mx-4 rounded-[10px] py-8 px-6 mt-[-74px] shadow-custom md:mx-0 md:mt-10 md:shadow-none md:rounded-none md:p-0 md:pr-[84px]">
      <h1 className="text-Denim text-2xl md:text-[32px]">Personal info</h1>
      <p className="text-Grey text-base mt-[9px] mb-[22px] md:mt-[11px] md:mb-[35px]">
        Please provide your name, email address, and phone number.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-Denim text-xs flex flex-col gap-4 md:text-sm  md:w-[42.8vw] md:max-w-[450px]"
        noValidate
      >
        {errors.name && (
          <h4 className="text-red-500 text-right mb-[-30px]">
            {errors.name.message}
          </h4>
        )}
        <label htmlFor="name">
          Name <br />
          <input
            className={`border-[#D6D9E6] bg-white rounded md:rounded-lg border-[1px] text-[15px] py-3 pl-4 w-full mt-[3px] md:mt-2 outline-none focus:border-[#483EFF] ${
              errors.name ? "border-[#EE374A]" : "border-[#D6D9E6]"
            }`}
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            {...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          <br />
        </label>
        {errors.email && (
          <h4 className="text-red-500 text-right mb-[-30px]">
            {errors.email.message}
          </h4>
        )}
        <label htmlFor="email">
          Email Address
          <input
            className={` bg-white rounded md:rounded-lg border-[1px] text-[15px] py-3 pl-4 w-full mt-[3px] outline-none focus:border-[#483EFF] ${
              errors.email ? "border-[#EE374A]" : "border-[#D6D9E6]"
            }`}
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
          <br />
        </label>
        {errors.number && (
          <h4 className="text-red-500 text-right mb-[-30px]">
            {errors.number.message}
          </h4>
        )}
        <label htmlFor="number">
          Phone Number
          <input
            className={`border-[#D6D9E6] bg-white rounded md:rounded-lg border-[1px] text-[15px] py-3 pl-4 w-full mt-[3px] outline-none focus:border-[#483EFF] ${
              errors.number ? "border-[#EE374A]" : "border-[#D6D9E6]"
            }`}
            type="number"
            id="number"
            name="number"
            placeholder="e.g. +1 234 567 890"
            {...register("number", { required: "This field is required" })}
          />
        </label>
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};

export default Forms;
