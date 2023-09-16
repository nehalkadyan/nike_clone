import React, { useState } from "react";
import "./sideScrollbar.css";
import Multiselect from "multiselect-react-dropdown";
import { BsArrowDownShort } from "react-icons/bs";

const SideScrollbar = () => {
  const [gender, setGender] = useState(["Male", "Female", "Unisex"]);

  return (
    <div className="side_scrollbar">
      <ul className="side_scrollbar_categories">
        <li>Shoes</li>
        <li>Tops and T-Shirts</li>
        <li>Hoodies and Sweatshirts</li>
        <li>Jackets</li>
        <li>Shorts</li>
        <li>Accessories</li>
        <li>Socks</li>
      </ul>

      <hr />

      {/* <Multiselect
        closeOnSelect
        showArrow
        showCheckbox
        isObject={false}
        onRemove={(event) => {
          console.log(event);
        }}
        onSelect={(event) => {
          console.log(event);
        }}
        options={gender}
      /> */}

      <div className="gender_checkbox">
        <div className="gender_checkbox_heading">
          <span>Gender</span>
          <div className="arrow_btn">
            <BsArrowDownShort />
          </div>
        </div>
      </div>

      <hr />
      <ul>
        <h3>Kids</h3>
        <li>
          <input type="checkbox" /> <span>Boys</span>
        </li>
        <li>
          <input type="checkbox" /> <span>Girls</span>
        </li>
      </ul>

      <ul>
        <h3>Shop By Price</h3>
        <li>
          <input type="checkbox" /> <span>Under RS. 2500.00</span>
        </li>
        <li>
          <input type="checkbox" /> <span>Under RS. 2501.00 - 7500.00</span>
        </li>
        <li>
          <input type="checkbox" /> <span>Under RS. 7501.00 - 12999.00</span>
        </li>
        <li>
          <input type="checkbox" /> <span>Under Rs. 13000.00</span>
        </li>
      </ul>

      <h3 style={{ marginLeft: "2.5rem" }}>Colour</h3>
      <ul className="color_section">
        <li>
          <div style={{ backgroundColor: "purple" }} className="purple"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "black" }} className="black"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "red" }} className="red"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "orange" }} className="orange"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "blue" }} className="blue"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "white" }} className="white"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "brown" }} className="brown"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "green" }} className="green"></div>
        </li>
        <li>
          <div style={{ backgroundColor: "yellow" }} className="yellow"></div>
        </li>
      </ul>
    </div>
  );
};

export default SideScrollbar;
