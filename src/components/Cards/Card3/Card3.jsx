import React, { useContext } from "react";
//css
import "./Card3.css";
//assets
import CardLogo from "../Card3/CardLogo.svg";
import Store from "../../context/store";
import { Grid } from "@mui/material";
const Card3 = ({ card3, cardData }) => {
  const { nameStatus, uploadedImage } = useContext(Store);

  const addressIconStyleList3 = [
    { addressClass: "location-text3", iconClass: "fa-location3" },
    { addressClass: "phone-text3", iconClass: "fa-envelope3" },
    { addressClass: "envelope-text3", iconClass: "fa-phone3" },
    { addressClass: "arrow-text3", iconClass: "fa-arrow-pointer3" },
  ];

  let index = 0;
  return (
    <>
      <Grid
        className="cards"
        columns={{ xs: 1, sm: 2 }}
        container
        justifyContent="center"
      >
        <Grid className={card3.firstCardContent.firstCardBlog}>
          <img
            style={{ width: "400px", height: "230px" }}
            src={card3.firstCardContent.backGroundImage}
            alt=""
          />
          <div className="text-general">
            <div style={{ width: "50px" }}>
              {uploadedImage ? (
                <img
                  className="card-logo"
                  src={URL.createObjectURL(uploadedImage)}
                  alt=""
                />
              ) : (
                <img className="card-logo" src={CardLogo} alt="" />
              )}
            </div>
            <div style={{ textAlign: "-webkit-center" }}>
              <h1 className={card3.firstCardContent.companyName}>
                {cardData.companyName
                  ? cardData.companyName
                  : card3.firstCardContent.companyNameText}
              </h1>
              <h5 className={card3.firstCardContent.companyNameSlogan}>
                {cardData.slogan
                  ? cardData.slogan
                  : cardData.slogan?.length == 0
                  ? ""
                  : card3.firstCardContent.companyNameSloganText}
              </h5>
            </div>

            <p className={card3.firstCardContent.companyNameLorem}>
              {cardData.description
                ? cardData.description
                : cardData.description?.length == 0
                ? ""
                : card3.firstCardContent.companyNameLoremText}
            </p>
          </div>
        </Grid>
        <Grid className={card3.secondCardContent.secondCardBlog}>
          <img
            style={{ width: "400px", height: "230px" }}
            src={card3.secondCardContent.backGroundImage}
            alt=""
          />
          <div className="name-div">
            <div
              className={card3.secondCardContent.divClassName}
              style={{ flexDirection: nameStatus ? "column" : "row" }}
            >
              <h2 className={card3.secondCardContent.cardHolderName}>
                {cardData.firstName
                  ? cardData.firstName
                  : card3.secondCardContent.cardHolderNameText}
              </h2>
              {/* <p className={card3.secondCardContent.cardMiddleClassName}>
                {cardData.middleName
                  ? cardData.middleName
                  : cardData.middleName?.length == 0
                  ? ""
                  : card3.secondCardContent.cardMiddleName}
              </p> */}
              <h2 className={card3.secondCardContent.cardHolderSurname}>
                {cardData.lastName
                  ? cardData.lastName
                  : card3.secondCardContent.cardHolderSurnameText}
              </h2>
            </div>
          </div>
          <div className="card3-title">

          <p className={card3.secondCardContent.cardHolderOccupation}>
            {cardData.title
              ? cardData.title
              : card3.secondCardContent.cardHolderOccupationText}
          </p>
          </div>

          <div className="info-box3">
            {card3.addressText.map((v) => {
              return (
                v?.text != null && (
                  <div key={v.id}>
                    <div key={v.id} className="icon-text3">
                      <div className={addressIconStyleList3[index].iconClass}>
                        {v?.icon}
                      </div>
                      <p
                        style={card3.contactList?.[0].customStyle || {}}
                        className={addressIconStyleList3[index].addressClass}
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
        </Grid>
      </Grid>
    </>
  );
};

export default Card3;
