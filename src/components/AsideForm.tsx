import { NavLink } from "react-router-dom";
import SideBarObj from "./Objects";

const AsideForm = () => {
  return (
    <ul className="bg-SideBarMobile bg-cover h-[172px] text-center">
      {SideBarObj.map((items) => (
        <li key={items.id} className="inline-block">
          <NavLink
            to={items.route}
            className={`py-[5.5px] px-3 ${
              items.id === 1 ? "" : "ml-4"
            } mt-8 block text-white text-sm rounded-full border-[1px] border-white`}
          >
            {items.id}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AsideForm;
