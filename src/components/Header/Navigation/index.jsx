import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";

const Navigation = () => {
  return (
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-5">
        <div className="col_1 w-[20%]">
          <Button className="!text-text-primary gap-2 w-full">
            <RiMenu2Fill className="text-[18px]" />
            Shop By Categories
            <FaAngleDown className="text-[13px] ml-auto font-bold" />
          </Button>
        </div>

        <div className="col_2 w-[65%]">
          <ul className="flex items-center gap-5">
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Home
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Supermarket Supplies
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Electronics
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Kitchen
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Furniture
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Fashion
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Liquor Store
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Pharmacy
              </Link>
            </li>

            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Garage
              </Link>
            </li>
          </ul>
        </div>

        <div className="col_2 w-[20%]">
          <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
            <GoRocket className="text-[18px]" />
            Fast, fresh, and right at your spot!
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
