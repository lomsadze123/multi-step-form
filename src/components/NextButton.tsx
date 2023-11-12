import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideBarObj from "../components/Objects";

const NextButton = ({ error }: { error: number }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [next, setNext] = useState("");

  useEffect(() => {
    const currentIndex = SideBarObj.findIndex(
      (item) => item.route === location.pathname
    );
    error === 0 && setNext(SideBarObj[currentIndex + 1]?.route || "thanks");
  }, [location.pathname]);

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

        <button className="text-white  bg-Denim py-3 hover:bg-[#164A8A] rounded">
          <Link to={next} className="py-3 px-4">
            Next Step
          </Link>
        </button>
      </div>
    )
  );
};

export default NextButton;
