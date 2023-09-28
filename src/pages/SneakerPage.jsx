import React, {useState} from 'react'
import {BsFillGridFill} from "react-icons/bs";
import { BiSolidGrid} from "react-icons/bi";
import "./sneakers.css"
import SneakerCard from '../components/sneakers_page-card/SneakerCard';


const sneakerCardData = [
    {
        id: 0,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/b7675171-a5b2-4988-91c5-818af52059be/acg-moc-black-fv4569-001-release-date.jpg",
        name: "ACG Moc",
        model: "Black",
        
    },
    {
        id: 1,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/78ceb779-59cb-4a41-9a1f-5f0b83a1167f/air-jordan-8-playoffs-305381-062-release-date.jpg",
        name: "Air Jordan 8",
        model: "Playoffs",
        
    },
    {
        id: 2,
        url: "https://static.nike.com/a/images/w_960,c_limit,f_auto/e7922168-c555-48da-ab46-65a533adc77c/nike-x-feng-chen-wang-lifestyle-collection-release-date.jpg",
        name: "Nike x Feng ",
        model: "Lifestyle ",
        
    },
    {
        id: 3,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/b7675171-a5b2-4988-91c5-818af52059be/acg-moc-black-fv4569-001-release-date.jpg",
        name: "ACG Moc",
        model: "Black",
        
    },
    {
        id: 4,
        url: "https://static.nike.com/a/images/w_960,c_limit,f_auto/15ae444f-5684-460d-9e4e-8566f6e13722/jordan-x-j-balvin-men-s-trousers-collection.png",
        name: "Jordan x J",
        model: "Men",
        
    },
    {
        id: 5,
        url: "https://static.nike.com/a/images/w_960,c_limit,f_auto/d883830a-c2de-4b2f-9c70-a7a9e83ac74e/jordan-x-j-balvin-women-s-apparel-collection.png",
        name: "Jordan x J ",
        model: "Women",
        
    },
    {
        id: 6,
        url: "https://static.nike.com/a/images/w_960,c_limit,f_auto/05898643-b1ae-4d02-a481-6a9bbe7ac0cb/jordan-x-j-balvin-men-s-tops-collection.png",
        name: "Jordan x J",
        model: "Men ",
        
    },
    {
        id: 7,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ae39f8c0-992a-40bc-974d-d255bc6857d1/air-jordan-3-x-j-balvin-sunset-fn0344-901-release-date.jpg",
        name: "Air Jordan 3xJ",
        model: "Sunset",
        
    },
    {
        id: 8,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/b0e123b9-d464-41a4-97ed-0f944b4055ed/air-jordan-1-high-g-x-eastside-golf-black-and-malachite-fj0849-001-release-date.jpg",
        name: "Air Jordan 1 High",
        model: "Malachite",
        
    },
    {
        id: 9,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/a4a00265-6660-4b30-85b3-805223d6c4e9/air-jordan-2-black-cement-dr8884-001-release-date.jpg",
        name: "Air Jordan 2",
        model: "Black",
        
    },
    {
        id: 10,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/f957d26d-9548-4535-a4bb-07206a09ec2c/air-jordan-11-craft-919712-001-release-date.jpg",
        name: "Air Jordan 11",
        model: "Craft",
        
    },
    {
        id: 11,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/14950bde-7e00-4e7e-b5eb-a1fd0c798611/air-jordan-6-g-x-eastside-golf-black-and-malachite-fj0848-100-release-date.jpg",
        name: "Air Jordan 6 ",
        model: "Bla",
        
    },
    {
        id: 12,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/86ed8b8b-e90a-488b-ad42-0480d59093e6/jordan-adg-4-x-eastside-golf-black-and-malachite-fj0850-001-release-date.jpg",
        name: "Jordan ADG 4",
        model: "Black",
        
    },
    {
        id: 13,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/54487f26-fd48-4fce-8e9c-3a1bf0b59a69/nike-sb-dunk-low-x-albino-preto-pearl-white-fd2627-200-release-date.jpg",
        name: "Nike SB Dunk",
        model: "Pearl",
        
    },
    {
        id: 14,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/gr93unb9grmcghrbvqqh/women-s-nike-shox-tl-black-and-max-orange-ar3566-002-release-date.jpg",
        name: "Women's Nike",
        model: " Max ",
        
    },
    {
        id: 15,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/v8jkgioy55h8qux24wbl/women-s-nike-shox-tl-white-and-max-orange-ar3566-100-release-date.jpg",
        name: "Women's Nike",
        model: "Max",
        
    },
    {
        id: 16,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/243fe33b-4560-4bc6-9f8c-e5a7da943d8e/ispa-mindbody-black-and-white-dh7546-101-release-date.jpg",
        name: "ISPA MindBody",
        model: "Black",
        
    },
    {
        id: 17,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/bc9c0c62-00bc-4ba6-9d4a-9ac76cfb5b8d/nocta-glide-black-and-white-dm0879-001-release-date.jpg",
        name: "NOCTA Glide",
        model: "White",
        
    },
    {
        id: 18,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/aedf5db4-086b-4ca4-87a1-05ebd2e7d659/air-max2-cb-94-black-and-pure-purple-fq8233-001-release-date.jpg",
        name: "Air Max2 CB",
        model: "Black ",
        upcoming: true
        
    },
    {
        id: 19,
        url: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ff1d8883-1aa9-4877-b85f-e4fc8f5e57e5/women-s-air-adjust-force-citron-pulse-and-sail-fj4552-100-release-date.jpg",
        name: "Women's Air Adjust",
        model: "Citron Pulse",
        stock: true,
        
    },

]

const stockedData = sneakerCardData.filter((item) => {
    return item.stock === true;
})




console.log(stockedData)


const SneakerPage = () => {

    const [showStock, setShowStock] = useState(false)
    const [showGridView, setShowGridView ] = useState(true);
    

  return (
    <div className='sneakers_page'>
        <div className='sneakers_page_heading'>

            <div className='sneakers_page_logo'>
                <img width={80} src="https://play-lh.googleusercontent.com/Dgs4TxgdjLA3RohKpdGaBzGWwHCcyUxNdqujp2qaOj8sW3mqDBQ8EgO5r5c8OgPOW4o" alt="img" />
            </div>
       <ul className='sneakers_page_items'>
        <li onClick={() => setShowStock(false)} >Feed</li>
        <li onClick={() => setShowStock(true)}  >In Stock</li>
       </ul>

       <div className='view_options_icons'>
            
            <BsFillGridFill onClick={() => setShowGridView(true)} style={{width: "23px", height: "23px"}}/>
            <BiSolidGrid onClick={() => setShowGridView(false)} style={{width: "30px", height: "30px"}}/>
       </div>
       </div>

      


      <div className={showGridView ? "sneaker_card_section": "sneaker_card_multi_view"}>
        {   showStock ? stockedData.map((item) => {
            return <SneakerCard key={item.id} name={item.name} cardImage = {item.url} model={item.model} />
        }) : sneakerCardData.map((item) => {
            return  <SneakerCard key={item.id} name={item.name} cardImage = {item.url} model={item.model}/>
           
         }) 
        }
     
       
      </div>
      
    </div>
  )
}

export default SneakerPage