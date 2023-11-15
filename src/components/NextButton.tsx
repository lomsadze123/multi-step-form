import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideBarObj from "../components/Objects";

interface Types {
  error: number;
  getValues: any;
  trigger: any;
}

const NextButton = ({ error, getValues, trigger }: Types) => {
  const [next, setNext] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const values = getValues();

  const check =
    values.name !== "" && values.email !== "" && values.number !== "";

  useEffect(() => {
    const currentIndex = SideBarObj.findIndex(
      (item) => item.route === location.pathname
    );

    if (error <= 0 && values.name !== undefined && check) {
      setNext(SideBarObj[currentIndex + 1]?.route || "thanks");
    } else {
      setNext("");
    }
  }, [location.pathname, error, check, values]);

  return (
    location.pathname !== "/thanks" && (
      <div
        className={`bottom-0 left-0 right-0 flex ${
          location.pathname === "/" && "flex-row-reverse"
        } justify-between bg-white p-4 mt-10 md:m-0 md:absolute md:max-w-[450px] md:left-[385px] md:bottom-5 md:pr-0`}
      >
        {location.pathname !== "/" && (
          <button
            onClick={() => navigate(-1)}
            className="text-Grey hover:text-Denim"
          >
            Go Back
          </button>
        )}

        <button
          className={`text-white ${
            location.pathname === "/summary" ? "bg-[#483EFF]" : "bg-Denim"
          } ${
            location.pathname === "/summary"
              ? "hover:bg-[#928CFF]"
              : "hover:bg-[#164A8A]"
          } py-3  rounded`}
        >
          <Link onClick={() => trigger()} to={next} className="py-3 px-4">
            {location.pathname === "/summary" ? "Confirm" : "Next Step"}
          </Link>
        </button>
      </div>
    )
  );
};

export default NextButton;
