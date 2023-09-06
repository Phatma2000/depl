import "./App.css";
//card1
import FrontFoto from "./components/Cards/Card1/FrontFoto192.png";
import BackFoto from "./components/Cards/Card1/BackFoto192.png";
import Logo from "./components/Cards/Card1/logo1.svg";
// card2
import FirstCard2 from "./components/Cards/Card2/FirstCard2.png";
import SecondCard2 from "./components/Cards/Card2/SecondCard2.png";
// card3
import CardFirst from "./components/Cards/Card3/CardFirst.png";
import CardSecond from "./components/Cards/Card3/CardSecond.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./pages/Form.jsx";

import Store from "./components/context/store";
import { useEffect, useState } from "react";
import {
  FaArrowPointer,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

import Card1 from "./components/Cards/Card1/Card1";
import Card2 from "./components/Cards/Card2/Card2";
import Card3 from "./components/Cards/Card3/Card3";
import Alboms from "./components/Alboms/Alboms";
// import particlesJS from "react-particles-js"
function App() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [cardData, setCardData] = useState([]);
  // const [fileDataURL, setFileDataURL] = useState(null);
  const [fontSize, setFontSize] = useState();
  const [flexDirection, setFlexDirection] = useState(false);
  const [nameStatus, setNameStatus] = useState(false);
  // const [selectCard, setSelectCard] = useState(null);
  // const [value, setFieldValue] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [printValue, setPrintValue] = useState();
 const  [chooseCard, setChooseCard] = useState(null);
  const cards = [
    {
      firstCardContent: {
        firstCard: "first-card",
        backGroundImage: `../..${FrontFoto}`,
        companyName: "company-name3",
        companyNameStyle: "company-name-design",
        companyNameText: "Media",
        companyNameSlogan: "company-name-slogan",
        companyNameSloganText: "SLOGANHERE",
        companyNameLoremText: "lorem",
        companyNameLoremContext: "lorem ipsum dolor",
        cardDesign: "first-card-design",
        LogoContent: `../..${Logo}`,
        cardLogo: "card-first-card-logo",
        LogoBox: "card-first-card-logo-box",
        companyNameLoremTextBox: "company-name-lorem-text-box",
        firstCardBlog: "first-card-blog",
      },
      secondCardContent: {
        secondCard: "second-card",
        backGroundImage: `../..${BackFoto}`,
        divClassName: "company-info",
        cardHolderName: "card-holder-name1",
        cardHolderNameText: `THOMAS`,
        cardHolderSurNameText: "SMITH",
        cardHolderOccupation: "span-text",
        cardHolderOccupationText: "occupation",
        cardHolderOccupationDescription: "Graphic Designer",
        informationBox: "information-box",
        iconGroup: "icon-group",
        iconInformation: "icon-information1",
        cardHolderNameBox: "cardHolderNameBox",
        secondCardBlog: "second-card-blog",
        // cardMiddleClassName: "middle-name1",
        // cardMiddleName: "Mike",
      },
      addressText: [
        {
          id: 1,
          text: cardData.address
            ? cardData.address
            : cardData.address == ""
            ? null
            : "123 Dummy, Lorem Ipsum",
          icon: <FaLocationDot />,
          customStyle: { fontWeight: "600" },
        },
        {
          id: 2,
          addressClass: "down-part-number",
          text: cardData.phoneNumber
            ? cardData.phoneNumber
            : cardData.phoneNumber == ""
            ? null
            : "+00 1234 5XXX 9012",
          icon: <FaPhone />,
          customStyle: { fontWeight: "600" },
        },
        {
          id: 3,
          text: cardData.email
            ? cardData?.email
            : cardData.email == ""
            ? null
            : "info@email space",
          icon: <FaEnvelope />,
          customStyle: { fontWeight: "600" },
        },
        {
          id: 4,
          addressClass: "down-part-website",
          text: cardData.website
            ? cardData.website
            : cardData.website == ""
            ? null
            : "www.websiteaddress",
          icon: <FaArrowPointer />,
          customStyle: { fontWeight: "600" },
        },
      ],
    },
    // card2

    {
      firstCardContent: {
        backGroundImage: `../..${FirstCard2}`,
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan1",
        companyNameSloganText: "Tagline space",
        companyNameLoremText: "down-part-lorem2",
        companyNameLoremTextContent: "Lorem Ipsum Dolor",
        firstCardBlog: "first-card-blog",
      },

      secondCardContent: {
        secondCard: "second-card2",
        backGroundImage: `../..${SecondCard2}`,
        DivclassName: "company-info",
        cardHolderName: "card-holder-name",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surname",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "cofounder-p",
        cardHolderOccupationText: "Co-Founder Brand Name",
        flexClassName: "flex",
        foncticonClassName: "fonticon",
        secondCardBlog: "second-card-blog",
        // cardMiddleClassName: "middle-name2",
        // cardMiddleName: "Mike",
      },

      addressText: [
        {
          id: 1,
          text: cardData.address
            ? cardData.address
            : cardData.address == ""
            ? null
            : "123 Dummy, Lorem Ipsum",
          icon: <FaLocationDot />,
        },
        {
          id: 2,
          text: cardData?.phoneNumber
            ? cardData?.phoneNumber
            : cardData.phoneNumber == ""
            ? null
            : "+00 1234 5XXX 9012",
          icon: <FaPhone />,
        },
        {
          id: 3,
          text: cardData.email
            ? cardData?.email
            : cardData.email == ""
            ? null
            : "info@email space",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          text: cardData.website
            ? cardData.website
            : cardData.website == ""
            ? null
            : "www.websiteaddress",
          icon: <FaArrowPointer />,
        },
      ],
    },
    //card3

    {
      firstCardContent: {
        firstCardBlog: "first-card-blog",
        backGroundImage: `../..${CardFirst}`,
        companyName: "company-name",
        companyNameText: "Design",
        companyNameSlogan: "slogan",
        companyNameSloganText: "Tagline space",
        companyNameLorem: "lorem-text",
        companyNameLoremText: "Lorem Ipsum Dolor",
      },

      secondCardContent: {
        secondCardBlog: "second-card-blog",
        backGroundImage: `../..${CardSecond}`,
        divClassName: "name-class",
        cardHolderName: "card-holder-namee",
        cardHolderNameText: "MARK",
        cardHolderSurname: "card-holder-surnamee",
        cardHolderSurnameText: "Smith",
        cardHolderOccupation: "project-manager",
        cardHolderOccupationText: "Project Manager",
        flexClassName: "flex",
        // cardMiddleClassName: "middle-name3",
        // cardMiddleName: "Mike",
      },

      addressText: [
        {
          id: 1,
          // addressClass: "location-text",
          text: cardData.address
            ? cardData.address
            : cardData.address == ""
            ? null
            : "123 Dummy, Lorem Ipsum",
          // iconClass: "location-dot",
          icon: <FaLocationDot />,
        },

        {
          id: 2,
          // addressClass: "phone-text",
          text: cardData?.phoneNumber
            ? cardData?.phoneNumber
            : cardData.phoneNumber == ""
            ? null
            : "+00 1234 5XXX 9012",
          // iconClass: "phone",
          icon: <FaPhone />,
        },

        {
          id: 3,
          // addressClass: "envelope-text",
          text: cardData.email
            ? cardData?.email
            : cardData.email == ""
            ? null
            : "info@email space",
          // iconClass: "envelope",
          icon: <FaEnvelope />,
        },
        {
          id: 4,
          // addressClass: "arrow-text",
          text: cardData.website
            ? cardData.website
            : cardData.website == ""
            ? null
            : "www.websiteaddress",
          // iconClass: "arrow-pointer",
          icon: <FaArrowPointer />,
        },
      ],
    },
  ];

  // console.log(cardData);
  // particlesJS(
  //   "particles-js",

  //   {
  //     particles: {
  //       number: {
  //         value: 80,
  //         density: {
  //           enable: true,
  //           value_area: 800,
  //         },
  //       },
  //       color: {
  //         value: "#ffffff",
  //       },
  //       shape: {
  //         type: "circle",
  //         stroke: {
  //           width: 0,
  //           color: "#000000",
  //         },
  //         polygon: {
  //           nb_sides: 5,
  //         },
  //         image: {
  //           src: "img/github.svg",
  //           width: 100,
  //           height: 100,
  //         },
  //       },
  //       opacity: {
  //         value: 0.5,
  //         random: false,
  //         anim: {
  //           enable: false,
  //           speed: 1,
  //           opacity_min: 0.1,
  //           sync: false,
  //         },
  //       },
  //       size: {
  //         value: 5,
  //         random: true,
  //         anim: {
  //           enable: false,
  //           speed: 40,
  //           size_min: 0.1,
  //           sync: false,
  //         },
  //       },
  //       line_linked: {
  //         enable: true,
  //         distance: 150,
  //         color: "#ffffff",
  //         opacity: 0.4,
  //         width: 1,
  //       },
  //       move: {
  //         enable: true,
  //         speed: 6,
  //         direction: "none",
  //         random: false,
  //         straight: false,
  //         out_mode: "out",
  //         attract: {
  //           enable: false,
  //           rotateX: 600,
  //           rotateY: 1200,
  //         },
  //       },
  //     },
  //     interactivity: {
  //       detect_on: "canvas",
  //       events: {
  //         onhover: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //         onclick: {
  //           enable: true,
  //           mode: "push",
  //         },
  //         resize: true,
  //       },
  //       modes: {
  //         grab: {
  //           distance: 400,
  //           line_linked: {
  //             opacity: 1,
  //           },
  //         },
  //         bubble: {
  //           distance: 400,
  //           size: 40,
  //           duration: 2,
  //           opacity: 8,
  //           speed: 3,
  //         },
  //         repulse: {
  //           distance: 200,
  //         },
  //         push: {
  //           particles_nb: 4,
  //         },
  //         remove: {
  //           particles_nb: 2,
  //         },
  //       },
  //     },
  //     retina_detect: true,
  //     config_demo: {
  //       hide_card: false,
  //       background_color: "#b61924",
  //       background_image: "",
  //       background_position: "50% 50%",
  //       background_repeat: "no-repeat",
  //       background_size: "cover",
  //     },
  //   }
  // );
  return (
    <>
    
      <Store.Provider
        value={{
          selectedCard,
          setSelectedCard,
          // fileDataURL,
          // setFileDataURL,
          cards,
          cardData,
          setCardData,
          fontSize,
          setFontSize,
          flexDirection,
          setFlexDirection,
          nameStatus,
          setNameStatus,
          uploadedImage,
          setUploadedImage,
          printValue,
          setPrintValue,
          chooseCard,
          setChooseCard
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route
              path="alboms"
              element={<Alboms card={cards[selectedCard]} />}
            />
            {/* <Route
              path="/card1"
              element={<Card1 card={cards[selectedCard]} />}
            />
            <Route path="/card2" element={<Card2 card={cards[1]} />}></Route>
            <Route path="/card3" element={<Card3 card={cards[2]} />}></Route> */}
          </Routes>
        </BrowserRouter>
      </Store.Provider>
    </>
  );
}

export default App;
