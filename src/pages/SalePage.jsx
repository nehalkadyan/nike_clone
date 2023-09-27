import React, {useState} from "react";
import Products from "../components/products/Products";
import SideScrollbar from "../components/side_scrollbar/SideScrollbar";
import "./sale.css"
import {BiFilter} from "react-icons/bi";
import { useFilterContext } from "../context/filterContext";




const SalePage = () => {

  const [showSideBar, setShowSideBar] = useState(true);
  const {sorting} = useFilterContext()
  

  return (
    <section className="sale_section">
      
    <div className="sale_page">
      <div className={showSideBar ? "sidebar" : "sidebar_hide"}>
      <SideScrollbar />
      </div>
       
       <div className="products_main">

        <div className="sale_page_buttons">
        <div className="top_bar_functionality"><div className="hide_filter_btn" onClick={() => setShowSideBar(!showSideBar)}>Hide Filters <div className="filter_icon"><BiFilter /></div></div>

        <div className="sort_by">
     <form action="#">
        <label htmlFor="sort">
          <select className="select_box" name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price (lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Name (a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Name (z-a)</option>

          </select>
        </label>
     </form>
</div>
</div>
</div>
       <div className="product_section">
       <Products />
       </div>
       
       </div>
      
    </div>
    </section>
  );
};

export default SalePage;


