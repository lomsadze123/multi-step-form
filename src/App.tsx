import { useForm } from "react-hook-form";
import { Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import AsideForm from "./components/AsideForm";
import NextButton from "./components/NextButton";
import { useState } from "react";

export type FormValue = {
  username: string;
  email: string;
  number: number;
};

function App() {
  const { register, handleSubmit, formState, getValues } = useForm<FormValue>();
  const { errors } = formState;
  const [click, setClick] = useState(false);

  return (
    <div className="md:grid md:grid-flow-col grid2 md:items-start md:gap-[100px] md:bg-white md:p-4 rounded-[15px] md:shadow-custom md:max-w-[940px] relative">
      <AsideForm />
      <Routes>
        <Route
          path="/"
          element={
            <Forms
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />
          }
        />
        <Route
          path="/plan"
          element={<Plan setClick={setClick} click={click} />}
        />
        <Route path="/add-ons" element={<AddOns click={click} />} />
        <Route
          path="/summary"
          element={<Summary setClick={setClick} click={click} />}
        />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <NextButton error={Object.keys(errors).length} getValues={getValues} />
    </div>
  );
}

export default App;
