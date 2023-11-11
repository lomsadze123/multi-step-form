import { useForm } from "react-hook-form";
import { Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import AsideForm from "./components/AsideForm";
import NextButton from "./components/NextButton";

// type FormValue = {
//   username: string;
//   email: string;
//   channel: string;
// };

function App() {
  // const { register, handleSubmit } = useForm<FormValue>();

  // const onSubmit = (data: FormValue) => {
  //   console.log("submitted", data);
  // };

  return (
    <div className="md:grid md:grid-flow-col grid2 md:items-start md:gap-[100px] md:bg-white md:p-4 rounded-[15px] md:shadow-custom md:max-w-[940px] relative">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username")} />
      </form> */}
      <AsideForm />
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <NextButton />
    </div>
  );
}

export default App;
