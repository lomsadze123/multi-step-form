import { NavLink } from "react-router-dom";
import SideBarObj from "./Objects";

const AsideForm = ({ complete }: { complete: boolean }) => {
  return (
    <ul className="bg-SideBarMobile bg-cover h-[172px] text-center md:text-start md:bg-SideBarDesktop md:h-[568px] md:flex md:flex-col md:gap-8 md:pt-10 md:pl-8">
      {SideBarObj.map((items) => (
        <div
          key={items.id}
          className="inline-block md:flex md:items-center md:gap-4 md:uppercase"
        >
          <li>
            <NavLink
              to={items.route}
              className={`py-[5.5px] px-3 ${
                items.id === 1 ? "" : "ml-4"
              } mt-8 block text-white text-sm rounded-full border-[1px] border-white md:m-0`}
            >
              {items.id}
            </NavLink>
          </li>
          <div className="hidden md:block">
            <p className="text-xs text-[#ABBCFF]">step {items.id}</p>
            <h4 className="text-sm text-white mt-1">{items.info}</h4>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default AsideForm;
