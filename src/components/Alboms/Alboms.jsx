import { Box, Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import Store from "../context/store";
import Card1 from "../Cards/Card1/Card1";
import Card2 from "../Cards/Card2/Card2";
import Card3 from "../Cards/Card3/Card3";
import Print from "../Print";
import { useFormik } from "formik";
import { fields } from "../constants";
import validationSchema from "../Validation";

import "./Albom.css";
import Carouselly from "../Carouselly/Carouselly";
const Alboms = () => {
  const {
    cardData,
    setCardData,
    cards,
    chooseCard
    
  } = useContext(Store);
  const firstRef = useRef();
  const fileRef = useRef();
  // const navigate = useNavigate();

    const formik = useFormik({
      initialValues: {
        firstName: "",
        middleName: "",
        lastName: "",
        companyName: "",
        slogan: "",
        description: "",
        address: "",
        phoneNumber: "",
        email: "",
        website: "",
        title: "",
        file: null,
      },
      validate(values) {
        const errors = {};

        if (!values.email) {
          errors.email = "Email field is required!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Email must be valid!";
        }

        return errors;
      },
      onSubmit: (values) => {
        console.log(JSON.stringify(values));
        localStorage.setItem("dataKey", JSON.stringify(values));
        setCardData(values);

        const fileInput = fileRef.current;
        if (fileInput.files.length > 0) {
          const file = fileInput.files[0];
          setUploadedImage(file);
        }

        // setFieldValue(values)
        navigate("/Alboms");
        // navigate("/Alboms", {state: {navigated: true}})
      },

      validationSchema: validationSchema,
    });

      const handleImageClick = (imageUrl) => {
        setClickedImage(imageUrl);
      };

//   const frontComponentRef = useRef();

//   const [cardList, setCardList] = useState([
//     {
//       projectName: "Card1",
//       progectBgColor: "red",
//     },
//     {
//       projectName: "Card2",
//       progectBgColor: "blue",
//     },
//     {
//       projectName: "Card3",
//       progectBgColor: "yellow",
//     },
//   ]);
//   const handleChange = (e) => {
//     let id = e.target.value;
//     setSelectedCard(id);
//   };

//   const handleClick = () => {
//     setPrintValue(e.target.value);
//   };

//   return (
//     <Box className="alboms" container justifyContent="center">
//       <Grid className="print-header-box">
//         <div>
//           <Print ref={{ frontComponentRef }} />
//         </div>
//       </Grid>

//       <Grid item xs={11} md={6} className="right-box">
//         <div>
//           <Grid>
//             {selectedCard == null && (
//               <>
//                 <Box
//                   sx={{
//                     width: 400,
//                     height: 230,
//                     margin: "auto",
//                     marginTop: "20px",
//                     borderRadius: "20px",
//                     backgroundColor: "#ECECEC",
//                     "&:hover": {
//                       backgroundColor: "#D5D5D5",
//                       opacity: [0.9, 0.8, 0.7],
//                     },
//                   }}
//                 />
//               </>
//             )}
//           </Grid>

//           <Grid>
//             {selectedCard == null && (
//               <>
//                 <Box
//                   sx={{
//                     width: 400,
//                     height: 230,
//                     margin: "auto",
//                     marginTop: "20px",
//                     borderRadius: "20px",
//                     backgroundColor: "#ECECEC",
//                     "&:hover": {
//                       backgroundColor: "#D5D5D5",
//                       opacity: [0.9, 0.8, 0.7],
//                     },
//                   }}
//                 />
//               </>
//             )}
//           </Grid>
//         </div>

//         <Grid className="cards-box">
//           {<Card1 card={cards[0]} cardData={cardData} width="300px" />}
//           {<Card2 card={cards[1]} cardData={cardData} />}
//           {<Card3 card3={cards[2]} cardData={cardData} />}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

  return (
    <div>
      <Grid container id="mainBox2">
        <Grid item xs={11} md={6} id="rightBox">
          <Print />
          <Carouselly onImageClick={handleImageClick} />
          {console.log("Card chosen:", cards[Number(chooseCard) - 1])}
          {/* {chooseCard && chooseCard > 0 && (
            <div>
              <Card1 card={cards[Number(chooseCard) - 1]} cardData={cardData} />
            </div>
          )} */}
          {chooseCard == 1 && (
            <div>
              <Card1 card={cards[0]} cardData={cardData} />
            </div>
          )}
          {chooseCard == 2 && (
            <div>
              <Card2 card={cards[1]} cardData={cardData} />
            </div>
          )}
          {chooseCard == 3 && (
            <div>
              <Card3 card3={cards[2]} cardData={cardData} />
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
          }
export default Alboms;
