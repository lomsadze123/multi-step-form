import { useForm } from "react-hook-form";

function App() {
  const form = useForm();
  const { register } = form;
  const { name, ref, onChange, onBlur } = register("username");

  console.log(name);

  return (
    <>
      <h1 className="text-red-500">Hello</h1>
    </>
  );
}

export default App;
