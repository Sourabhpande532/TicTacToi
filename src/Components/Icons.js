import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

/*hint:
 we don't want to return anything generic because we want to first
 test then base on that testing we "return" */
const Icons = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className='icons' />;
    case "cross":
      return <FaTimes className='icons' />;
    default:
      return <FaPen className='icons' />;
  }
};

export default Icons;
