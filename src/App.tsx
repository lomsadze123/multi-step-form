import { useForm } from "react-hook-form";
import { Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import Plan from "./components/Plan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import AsideForm from "./components/AsideForm";

function App() {
  const { register } = useForm();
  const { name, ref, onChange, onBlur } = register("username");

  console.log(name);

  return (
    <>
      <AsideForm />
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </>
  );
}

export default App;
