// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_._SY116_CB575604128_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_3_copy._SY116_CB575604128_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_1_copy._SY116_CB575604128_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/6._CB575335719_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/Low_jewl._SY116_CB575249357_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/jupiter-hdfc-bankoffer/Phase3/ACER1x_Qc_186x116._SY116_CB575259432_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/Low_watches._SY116_CB575249357_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/Eng_200x200._CB574633783_.jpg",
          },
          {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_._SY116_CB575604128_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_3_copy._SY116_CB575604128_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_1_copy._SY116_CB575604128_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/6._CB575335719_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/Low_jewl._SY116_CB575249357_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/jupiter-hdfc-bankoffer/Phase3/ACER1x_Qc_186x116._SY116_CB575259432_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/PCQC/phase3/Low_watches._SY116_CB575249357_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/certified_refurbished/anjaga/Jupiter23/JupiterGWCampaigns/Desktop-CC2._SY304_CB575248587_.jpg",
          },
          {
            title: "Explore top offers in smartphonesSee all deals",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/nbshagun/Jupiter/Phase3/MSO/D101846224_IN_WLD_Jup23_MSO_Uber_P3_Phase3_Desktop_CC_379x304_1._SY304_CB575323490_.jpg",
          },  {
            title: "Up to 70% off | Amazon Renewed",
            description: "See all offer",
            image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/Eng_200x200._CB574633783_.jpg",
          },
         
       
      ],
      currentIndex: 0, // Index of the first card to be displayed
      numVisibleCards: 4, // Number of cards to display at a time
    };
  }

  handleLeftArrowClick = () => {
    this.setState((prevState) => ({
      currentIndex: Math.max(prevState.currentIndex - 1, 0),
    }));
  };

  handleRightArrowClick = () => {
    this.setState((prevState) => ({
      currentIndex: Math.min(
        prevState.currentIndex + 1,
        prevState.cardData.length - prevState.numVisibleCards
      ),
    }));
  };

  render() {
    const { cardData, currentIndex, numVisibleCards } = this.state;
    const visibleCards = cardData.slice(
      currentIndex,
      currentIndex + numVisibleCards
    );

    return (
      <div>
        <button onClick={this.handleLeftArrowClick} className="relative top-36 sm:pl-32 text-gray-300 "><i className="fa-solid fa-angles-left fa-2xl"></i></button>
        <button onClick={this.handleRightArrowClick} className="relative top-36 left-80 sm:pl-96 sm:ml-96 text-gray-300"><i className="fa-solid fa-angles-left fa-rotate-180 fa-2xl"></i></button>
        <div>
          {visibleCards.map((card, index) => (
            <div
              key={index}
              style={{ display: "inline-block", width: "200px" }}
              className=" ml-24 sm:ml-32 w-96 pt-10 flex flex-row"
            >
              <div className="card" style={{ width: "100%" }}>
                <img src={card.image} alt="" className=" w-screen"/>
                <h3 className="text-xl ">{card.title}</h3>
                <p className="pt-2 text-sky-500">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}

export default CardCarousel;
