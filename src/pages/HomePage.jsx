import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import homeHeroPoster from "../assets/images/heroPoster.jpg";
import VideoSection from "../components/video-section/VideoSection"
import nikeVideo from "../assets/videos/Nike_Ad.mp4";
import TrendingPage from "../components/trending/TrendingPage"
import VideoPlayer from "../components/video-player/VideoPlayer"
import EssentialCard from "../components/essential-cards/EssentialCard";





const HomePage = () => {
  const animatedSpan = "New Styles On Sale: Up to 40% Off";
  const animatedPara = "Shop All Our New Markdowns";
  const cardTitle = "Just In";
  const cardCategory = "NIKE READY PACK";
  const cardPara =
    "The season is here. Start yours prepared with the best in touch, agility, precision and speed.";
  const cardButton = "Shop All";

  const videoSectionTitle = "NIKE STRUCTURE 25";
  const videoPara = "Stability where you need it, cushion where you want it.";
  const videoBtn = "Shop"

  const largeCardData = [
    {
      id: 1,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/f276a8cb-7292-45d0-b494-abfbdd0e0734/nike-just-do-it.png",
      droppingDate: "Dropping on App: 31 August",
      model: "Vaporfly Next%3 EK",
      button: "Get It First"
    }, 
    {
      id: 2,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/6b062282-8352-48f1-9119-f55786cdac24/nike-just-do-it.png",
      droppingDate: "Icon Made Flesh",
      model: "Nike Killshot 2 Leather",
      button: "Shop"
    }, 

   
  ]

  const featuredCardData = [
    {
      id: 1,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/9ca85d10-facf-4817-964c-d4f5925c0cdc/nike-just-do-it.png",
      droppingDate: "Nike Yoga",
      model: "Comfort Made For The Mat",
      button: "Shop"
    }, 
    {
      id: 2,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/3a1d0f80-4fcd-453e-9fa0-7f19dc8e6d8a/nike-just-do-it.png",
      droppingDate: "",
      model: "Life Style Footwear",
      button: "Shop"
    }, 
  ]

  const essentialCardData = [
    {
      id: 1,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png",
      category: "Men's"
    },
    {
      id: 2,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png",
      category: "Women's"
    },
    {
      id: 3,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png",
      category: "Kid's"
    }
  ]

  

  return (
    <div className="homepage">
      <HeroSection
        animatedSpan={animatedSpan}
        animatedPara={animatedPara}
        heroPoster={homeHeroPoster}
        title={cardTitle}
        category={cardCategory}
        para={cardPara}
        button={cardButton}
      />
      <VideoSection video={nikeVideo} videoTitle={videoSectionTitle} videoPara={videoPara} videoBtn={videoBtn} />


      <div className="heading">
        <span>Trending</span>
      </div>
      <div className="trending__section">
     

      <br />
      {
        largeCardData.map((item, id) => {
          return (
            <TrendingPage image= {item.img} imp ={item.droppingDate} name={item.model} button = {item.button}/>
          )
        })
      }
      </div>

      <VideoPlayer />

      <div className="heading">
        <span>Featured</span>
      </div>

      <div className="trending__section">
     

      <br />
      {
        featuredCardData.map((item, id) => {
          return (
            <TrendingPage image= {item.img} imp ={item.droppingDate} name={item.model} button = {item.button}/>
          )
        })
      }
      </div>

      <div className="heading">
        <span>The Essentials</span>
      </div>

      <div className="trending__section">
        {
          essentialCardData.map((item, id) => {
            return (
              <EssentialCard image={item.img} category={item.category}/>
            )
          })
        }
      </div>

      
    </div>
  );
};

export default HomePage;
