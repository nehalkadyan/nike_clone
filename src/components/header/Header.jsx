import React, {useState} from 'react';
import "./header.css";
import nikeLogo from "../../assets/images/nike-logo.jpg";
import {BsSearch} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai"
import {PiSuitcaseSimpleThin} from "react-icons/pi"
import { useFilterContext } from '../../context/filterContext';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const {total_item} = useCartContext()

    const {filters:{text}, all_products, updateFilterValue} = useFilterContext()


    // TO GET UNIQUE DATA OF EACH FIELD
    


  return (
    <div className='header'>
        <div className='header__img'>
       
            <NavLink to="/"><img src={nikeLogo} alt="header-img"/></NavLink>
            </div> 

            <ul className='header__items'>
              <li className='first__item'>News & Featured
              <div className='sub__menu'>
                <ul>
                   <div className='sub__menu_heading'><h3>News and Featured</h3>
                   <ul className='flex__direction'>
                        <li>New Arrivals</li>
                        <li>Latest Shoes</li>
                        <li>Latest Clothing</li>
                        <li>SNKRS Launch Calendar</li>
                        <li>Get Em In SNKRS</li>
                        <li>Customise with Nike By You</li>
                        <li>Bestsellers</li>
                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Shop Icons</h3>
                   <ul className='flex__direction'>
                        <li>Air Force 1</li>
                        <li>Air Jordan 1</li>
                        <li>Air Max</li>
                        <li>Dunk</li>
                        <li>Blazer</li>
                        <li>Pegasus</li>
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>New For Men</h3>
                   <ul className='flex__direction'>
                        <li>Shoes</li>
                        <li>Clothing</li>
                        <li>Accessories</li>
                        <li>Shop All New</li>
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    
                    <ul>
                   <div className='sub__menu_heading'><h3>New For Women</h3>
                   <ul className='flex__direction'>
                        <li>Shoes</li>
                        <li>Clothing</li>
                        <li>Accessories</li>
                        <li>Shop All New</li>
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>New For Kids</h3>
                   <ul className='flex__direction'>
                        <li>Shoes</li>
                        <li>Clothing</li>
                        <li>Accessories</li>
                        <li>Shop All New</li>
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>
              </div>

              

              </li>
           
              <li className='first__item'>Men

              <div className='sub__menu'>
                <ul>
                   <div className='sub__menu_heading'><h3>Featured</h3>
                   <ul className='flex__direction'>
                        <li>New Releases</li>
                        <li>BestSellers</li>
                        <li>Member Exclusive</li>
                        <li>Jordan</li>
                        <li>Retro Running</li>
                        <li>National Team Kids</li>
                        <li>Customize with Nike By You</li>
                        <li>Last Sizes Available</li>
                        <li>Sale</li>
                        <li>Running Shoe</li>
                        <li>Sustainable Materials</li>

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Shoes</h3>
                   <ul className='flex__direction'>
                        <li>All Shoes</li>
                        <li>Newest Sneakers</li>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Running</li>
                        <li>Basketball</li>
                        <li>Football</li>
                        <li>Gym and Training</li>
                        <li>Sandals and slides</li>
                        <li>Last Sizes available</li>
                        <li>Top Picks Under $1000.00</li>
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Clothing</h3>
                   <ul className='flex__direction'>
                        <li>Tops and T-Shirts</li>
                        <li>All Clothing</li>
                        <li>Shorts</li>
                        <li>Pants and Tracks</li>
                        <li>Hoodies and SweatShirts</li>
                        <li>Jackets and Gilets</li>
                        <li>Jerseys and Kits</li>
                        <li>Jordan</li>
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    
                    <ul>
                   <div className='sub__menu_heading'><h3>Shop By Sport</h3>
                   <ul className='flex__direction'>
                        <li>Running</li>
                        <li>FootBall</li>
                        <li>Basketball</li>
                        <li>Gym and Training</li>
                        <li>Yoga</li>
                        <li>SkateBoarding</li>
                        <li>Tennis</li>
                        <li>Golf</li>
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                  
              </div>

              </li>
              <li className='first__item'>Women

              <div className='sub__menu'>
                <ul>
                   <div className='sub__menu_heading'><h3>Featured</h3>
                   <ul className='flex__direction'>
                        <li>New Releases</li>
                        <li>BestSellers</li>
                        <li>Member Exclusive</li>
                        <li>Jordan</li>
                        <li>Retro Running</li>
                        <li>National Team Kids</li>
                        <li>Customize with Nike By You</li>
                        <li>Last Sizes Available</li>
                        <li>Sale</li>
                        <li>Running Shoe</li>
                        <li>Sustainable Materials</li>

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Shoes</h3>
                   <ul className='flex__direction'>
                        <li>All Shoes</li>
                        <li>Newest Sneakers</li>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Running</li>
                        <li>Basketball</li>
                        <li>Football</li>
                        <li>Gym and Training</li>
                        <li>Sandals and slides</li>
                        <li>Last Sizes available</li>
                        <li>Top Picks Under $1000.00</li>
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Clothing</h3>
                   <ul className='flex__direction'>
                        <li>Tops and T-Shirts</li>
                        <li>All Clothing</li>
                        <li>Shorts</li>
                        <li>Pants and Leggings</li>
                        <li>Hoodies and SweatShirts</li>
                        <li>Jackets and Gilets</li>
                        <li>Jerseys and Kits</li>
                        <li>Jordan</li>
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    
                    <ul>
                   <div className='sub__menu_heading'><h3>Shop By Sport</h3>
                   <ul className='flex__direction'>
                        <li>Running</li>
                        <li>FootBall</li>
                        <li>Basketball</li>
                        <li>Gym and Training</li>
                        <li>Yoga</li>
                        <li>SkateBoarding</li>
                        <li>Tennis</li>
                        <li>Golf</li>
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                  
              </div>
              </li>
              <li className='first__item'>Kids
              <div className='sub__menu'>
                <ul>
                   <div className='sub__menu_heading'><h3>Featured</h3>
                   <ul className='flex__direction'>
                        <li>New Releases</li>
                        <li>Newest Sneakers</li>
                        <li>Bestsellers</li>
                        <li>Member Exclusive</li>
                        <li>Jordan</li>
                        <li>Back to School</li>
                        <li>Last Sizes Available</li>
                        <li>Last Sizes Available</li>
                        <li>Sale</li>
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Boys' Shoes</h3>
                   <ul className='flex__direction'>
                        <li>All Shoes</li>
                        <li>Older Boys (7-14 years)</li>
                        <li>Younger Boys (4-7 years)</li>
                        <li>Babies and Toddlers (0-4 years)</li>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Football</li>
                        <li>Running</li>
                        <li>Basketball</li>
                        <li>Sandals and Slides</li>
                       
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Girls' Shoes</h3>
                   <ul className='flex__direction'>
                        <li>All Shoes</li>
                        <li>Older Girls (7-14 years)</li>
                        <li>Younger Girls (4-7 years)</li>
                        <li>Babies and Toddlers (0-4 years)</li>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Football</li>
                        <li>Running</li>
                        <li>Basketball</li>
                        <li>Sandals and Slides</li>
                       
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    
                    <ul>
                   <div className='sub__menu_heading'><h3>Accessories and Equipment</h3>
                   <ul className='flex__direction'>
                        <li>All Accessories and Equipment</li>
                        <li>Bags and Bakcpacks</li>
                        <li>Socks</li>
                        <li>Hats and Headwear</li>
                     

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                  
              </div>
              </li>
              <li className='first__item'><NavLink className="navlink" to="/sale">Sale</NavLink>
              <div className='sub__menu'>
                <ul>
                   <div className='sub__menu_heading'><h3>Featured</h3>
                   <ul className='flex__direction'>
                        <li>Shop All Sale</li>
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Men's Sale</h3>
                   <ul className='flex__direction'>
                        <li>Shoes</li>
                        <li>Clothing</li>
                        
                        

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    <ul>
                   <div className='sub__menu_heading'><h3>Womne's Sale</h3>
                   <ul className='flex__direction'>
                        <li>Shoes</li>
                        <li>Clothing</li>
                        
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                    
                    <ul>
                   <div className='sub__menu_heading'><h3>Kids' Sale</h3>
                   <ul className='flex__direction'>
                        <li>Shoes</li>
                        <li>Clothing</li>
                        
                      

                    </ul>
                   </div>
                   
                   
                    
                   
                    
                    </ul>

                  
              </div>
              </li>
              <NavLink className="navlink" to="/snkr"><li>SNKRS</li></NavLink>

            </ul>

            <div className='header__right'>
                <div className='header__search'>
                    <div className='search__icon'><BsSearch /></div>
                    
                <input type="text" name="text" value={text} onChange={updateFilterValue} placeholder='Search'/>
                </div>
                
                <div className='header__icons'> 
                
                <div>
                <AiOutlineHeart className='icon' />
                </div>
                
                <div>
                <NavLink className="navlink" to="/cart"><PiSuitcaseSimpleThin className='cart_icon' /></NavLink>
                <div className='total_item_icon'>
                {total_item}
                </div>
                </div>
                
                <GiHamburgerMenu className='menu_icon' onClick={() => setShowMenu(!showMenu)}/> 

                <div className={showMenu ? "slide-out-menu" : "slide-out-hide"}>
                   {
                    showMenu ? <ul className='slide-out-list'>
                    <li onClick={() => setShowMenu(!showMenu)}>New & Featured</li>
                    <li onClick={() => setShowMenu(!showMenu)}>Men</li>
                    <li onClick={() => setShowMenu(!showMenu)}>Women</li>
                    <li onClick={() => setShowMenu(!showMenu)}>Kids</li>
                    <NavLink className="navlink" to="/sale"><li onClick={() => setShowMenu(!showMenu)}>Sale</li></NavLink>
                    <NavLink className="navlink" to="/snkr"> <li onClick={() => setShowMenu(!showMenu)}>SNKRS</li></NavLink>
                   </ul> : ""
                   }
                   
                    
               
                </div>
                </div>

               

                
                
                
                

            </div>
           
       
    </div>
  )
}

export default Header