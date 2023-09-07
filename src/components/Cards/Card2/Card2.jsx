import React, { useContext } from "react";
//assets
import Logo from "../Card2/Logo.svg";
//css
import "./Card2.css";
import Store from "../../context/store";
import { Grid } from "@mui/material";

const Card2 = ({ card, cardData }) => {
  const { fileDataURL, setFileDataURL, fontSize, setFontSize, uploadedImage, setFlexDirection, flexDirection } =
    useContext(Store);

  const addressIconStyleList = [
    { addressClass: "down-part-lorem22", iconClass: "fa-location-dot2" },
    { addressClass: "down-part-number2", iconClass: "fa-phone2" },
    { addressClass: "down-part-email2", iconClass: "fa-envelope2" },
    { addressClass: "down-part-website2", iconClass: "fa-arrow-pointer2" },
  ];

  let index = 0;
 if (cardData?.firstName?.length > 6) {
   setFlexDirection(true);
 }

  return (
    <Grid
      className="cards"
      columns={{ xs: 1, sm: 2 }}
      container
      justifyContent="center"
    >
      {/* first card */}
      <Grid
        className={card.firstCardContent.firstCardBlog}
        style={{
          backgroundImage: `url(${card.firstCardContent.backGroundImage})`,
        }}
      >
        <div className="design-div">
          <div style={{ width: "50px" }}>
            {uploadedImage ? (
              <img
                className="logo-img"
                src={URL.createObjectURL(uploadedImage)}
                alt=""
              />
            ) : (
              <img className="logo-img" src={Logo} alt="" />
            )}
          </div>

          <div className="webkit">
            <h3 className={card.firstCardContent.companyName}>
              {cardData.companyName
                ? cardData.companyName
                : card.firstCardContent.companyNameText}
            </h3>
            <p className={card.firstCardContent.companyNameSlogan}>
              {cardData?.slogan
                ? cardData?.slogan
                : cardData.slogan?.length == 0
                ? ""
                : card.firstCardContent.companyNameSloganText}
            </p>
          </div>
        </div>
        <p className={card.firstCardContent.companyNameLoremText}>
          {cardData.description
            ? cardData.description
            : cardData.description?.length == 0
            ? ""
            : card.firstCardContent.companyNameLoremTextContent}
        </p>
      </Grid>

      {/* second card */}
      <Grid
        className={card.secondCardContent.secondCardBlog}
        style={{
          backgroundImage: `url(${card?.secondCardContent.backGroundImage})`,
        }}
      >
        <div className="company-info">
          <div className={card.secondCardContent.flexClassName}  style={{ flexDirection: flexDirection ? "column" : "row" }}>
            <h2 className={card.secondCardContent.cardHolderName}>
              {cardData.firstName
                ? cardData.firstName
                : card.secondCardContent.cardHolderNameText}
            </h2>

            {/* <p className={card.secondCardContent.cardMiddleClassName}>
              {cardData.middleName
                ? cardData.middleName
                : cardData.middleName?.length == 0
                ? ""
                : card.secondCardContent.cardMiddleName}
            </p> */}
            <span className={card.secondCardContent.cardHolderSurname}>
              {cardData.lastName
                ? cardData.lastName
                : card.secondCardContent.cardHolderSurnameText}
            </span>
          </div>
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.title
              ? cardData.title
              : card.secondCardContent.cardHolderOccupationText}
          </p>
        </div>
        <div className="info-box2">
          {card.addressText.map((v) => {
            return (
              v.text != null && (
                <div key={v.id}>
                  <div key={v.id} className="icon-text2">
                    <div className={addressIconStyleList[index].iconClass}>
                      {v?.icon}
                    </div>
                    <p className={addressIconStyleList[index].addressClass}>
                      {v?.text}
                    </p>
                  </div>
                  <p style={{ display: "none" }}> {++index}</p>
                </div>
              )
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};
export default Card2;
