import React from "react";
import "./sideScrollbar.css";
import { useFilterContext } from "../../context/filterContext";

const SideScrollbar = () => {
  // const [gender, setGender] = useState(["Male", "Female", "Unisex"]);

  const {filters:{ price, maxPrice, minPrice}, clearFilters, all_products, updateFilterValue} = useFilterContext();



const getUniqueData = (data, property) => {
  let newVal = data.map((item) => { 
      return item[property];
  }
  );
  // if(property === "colors"){
  //   newVal = newVal.flat();
  //   console.log(newVal)
  // }
  
   
  return (newVal = ["all", ...new Set(newVal)]);
}

// WE NEED UNIQUE DATA  
const categoryOnlyData = getUniqueData(all_products, "category");
const genderData = getUniqueData(all_products, "gender" );
const kidsData = getUniqueData(all_products, "kids");
const sportsData = getUniqueData(all_products, "sports");
// const colorsData = getUniqueData(all_products, "colors");


 


  return (
    <div className="side_scrollbar">
      <span>Categories</span>
      <ul className="side_scrollbar_categories" >
        {
          categoryOnlyData.map((item, index) => {
            return ( 
            <button  key = {index} 
            type="button"
            name="category"
            value={item}
            onClick={updateFilterValue}
            >
              {item}
            </button>
            )
          })
        }
      </ul>

      

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

      {/* <div className="gender_checkbox"> */}
        {/* <div className="gender_checkbox_heading">
          <span>Gender</span>
          <div className={showDropdown ? "arrow_btn_open" : "arrow_btn"} onClick={() => setShowDropdown(!showDropdown) }>
            <BsArrowDownShort />
          </div>
        </div> */}

        

        <div className="gender_section">
        <span>Gender</span>

          <form action="#" className="gender_form">
          <select className="select_box" name="gender" id ="gender" onClick={updateFilterValue}>
              {
                genderData.map((item, index) => {
                    return (
                      <option  key={index} value={item} name="gender">
                        {item}
                        </option>
                    )
                })
              }
          </select>
          </form>
        </div>
      {/* </div> */}

      <hr />
      
       <div className="kids_section">
       <span>Kids</span>

          <form action="#" >
          <select className="select_box" name="kids" id ="kids" onClick={updateFilterValue}>
            
              {
                kidsData.map((item, index) => {
                    return (
                      <option  key={index} value={item} name="kids">
                        {item}
                        </option>
                    )
                })
              }
          </select>
      </form>
      </div>
      
      <div className="price_section">
          <span>Shop By Price</span>
         
           <h6>{price}</h6>
           <input name="price"  type="range" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue}/>
      
      </div>

      
      

     
      
        <div className="sports_form">
          <span>Sports</span>
      <form action="#">

          <select className="select_box" name="sports" id ="sports" onClick={updateFilterValue}>
              {
               sportsData.map((item, index) => {
                    return (
                      <option  key={index} value={item} name="sports">
                        {item}
                        </option>
                    )
                })
              }
          </select>
          </form>
          </div>

          <div className="side_scrollbar_clear_filter">
            <button onClick={clearFilters}>Clear Filters</button>
          </div>
      </div>
    
  );
};

export default SideScrollbar;
