import React, { useContext, useEffect, useState } from "react";

// ASSETS
import "./Card1.css";
import Store from "../../context/store";
import Logo from "../../Cards/Card1/logo1.svg";
import { Grid } from "@mui/material";

const VisitCard = ({ card, animateCard1 }) => {
  const {
    cardData,
    flexDirection,
    uploadedImage,
    setFlexDirection,
  } = useContext(Store);

  const addressIconStyleList1 = [
    { addressClass: "down-part-lorem1", iconClass: "fa-location1" },
    { addressClass: "down-part-number", iconClass: "fa-envelope1" },
    { addressClass: "down-part-email", iconClass: "fa-phone1" },
    { addressClass: "down-part-website", iconClass: "fa-arrow-pointer1" },
  ];
  let index = 0;
   if( cardData?.companyName?.length > 6){
    setFlexDirection(true);
   }

   if(cardData?.firstName?.length > 12){
    setFlexDirection(true)
   }

   if(cardData?.lastName?.length>13){
    setFlexDirection

   }
  return (
    <Grid
      className="cards"
      columns={{ xs: 1, sm: 2 }}
      container
      justifyContent="center"
    >
      {/* first card */}
      <Grid className={card.firstCardContent.firstCardBlog}>
        <img
          src={card.firstCardContent.backGroundImage}
          className={card.firstCardContent.firstCard}
        />
        <div
          className={card.firstCardContent.cardDesign}
          style={{ flexDirection: flexDirection ? "column" : "row" }}
        >
          <div className={card.firstCardContent.LogoBox}>
            {/* <img
              value={setFieldValue}
              className={card.firstCardContent.cardLogo}
              src={`${value || Logo}`}
              alt=""
            /> */}
            {/* Use the uploadedImage prop here */}

            {uploadedImage ? (
              <img
                className={card.firstCardContent.cardLogo}
                src={URL.createObjectURL(uploadedImage)}
                alt=""
              />
            ) : (
              <img
                className={card.firstCardContent.cardLogo}
                src={Logo}
                alt=""
              />
            )}
          </div>
          <div>
            <div className={card.firstCardContent.companyName}>
              <h2>
                {cardData.companyName
                  ? cardData.companyName
                  : card.firstCardContent.companyNameText}
                {/* {cardData.companyName 
                  ? // ? cardData.companyName : cardData.companyName?.length >6 ? flexDirection: "column" : "row" ? "" : card.firstCardContent.companyNameText}
                    // {cardData.companyName
                    cardData.companyName.length > 6
                    // ? { flexDirection: "column" }
                    // : { flexDirection: "row" }
                  : card.firstCardContent.companyNameText} */}
              </h2>
              <p className={card.firstCardContent.companyNameSlogan}>
                {cardData.slogan
                  ? cardData.slogan
                  : cardData.slogan?.length == 0
                  ? ""
                  : card.firstCardContent.companyNameSloganText}
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className={card.firstCardContent.companyNameLoremTextBox}>
          <p className={card.firstCardContent.companyNameLoremText}>
            {cardData.description
              ? cardData.description
              : cardData.description?.length == 0
              ? ""
              : card.firstCardContent.companyNameLoremContext}
          </p>
        </div>
      </Grid>

      {/* second card */}
      <Grid className={card.secondCardContent.secondCardBlog}>
        <img
          src={card.secondCardContent.backGroundImage}
          className={card.secondCardContent.secondCard}
          alt=""
        />
        <div className="info-box1">
          {card.addressText.map((v) => {
            return (
              v?.text != null && (
                <div key={v.id}>
                  <div key={v.id} className="icon-text1">
                    <div className={addressIconStyleList1[index].iconClass}>
                      {v?.icon}
                    </div>
                    <p
                      style={card.contactList?.[0].customStyle || {}}
                      className={addressIconStyleList1[index].addressClass}
                    >
                      {v?.text}
                    </p>
                  </div>
                  <p style={{ display: "none" }}> {++index}</p>
                </div>
              )
            );
          })}
        </div>
        <div
          className={card.secondCardContent.cardHolderNameBox}
          // style={{ flexDirection: flexDirection ? "column" : "row" }}
        >
          <p className={card.secondCardContent.cardHolderName}>
            {cardData.firstName
              ? cardData.firstName
              : card.secondCardContent.cardHolderNameText}
          </p>
          {/* <p className={card.secondCardContent.cardMiddleClassName}>
            {cardData.middleName
              ? cardData.middleName
              : cardData.middleName?.length == 0
              ? ""
              : card.secondCardContent.cardMiddleName}
          </p> */}
          <pre>
            <b>
              <span className={card.secondCardContent.cardHolderSurNameText}>
                {cardData.lastName
                  ? cardData.lastName
                  : card.secondCardContent.cardHolderSurNameText}
              </span>
            </b>
          </pre>
        </div>
        <div className="title-div1">
          <p className={card.secondCardContent.cardHolderOccupation}>
            {cardData.title
              ? cardData.title
              : card.secondCardContent.cardHolderOccupationDescription}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default VisitCard;
