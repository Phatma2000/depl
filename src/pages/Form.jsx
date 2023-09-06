import React, { useContext, useState, useRef, forwardRef } from "react";
//Assets
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Form.css";
import { Card, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import { useFormik } from "formik";
import validationSchema from "../components/Validation";

import { useNavigate } from "react-router-dom";
import Store from "../components/context/store";
import { fields } from "../components/constants";
import Animationss from "../components/Animations/Animationss";
import header from "../pages/header-business.jpg";
import Carouselly from "../components/Carouselly/Carouselly";
import Print from "../components/Print";
import "animate.css";
import Card1 from "../components/Cards/Card1/Card1";
import Card2 from "../components/Cards/Card2/Card2";
import Card3 from "../components/Cards/Card3/Card3";

import { postData } from "../services/addInfo";

function Form(onImageClick2) {
  const {
    cardData,
    setCardData,
    selectedCard,
    setSelectedCard,
    cards,
    fileDataURL,
    setFileDataURL,
    setName,
    setFontSize,
    setDisplay,
    selectedFile,
    setSelectedFile,
    setSlogan,
    setFlexDirection,
    value,
    setFieldValue,
    setUploadedImage,
    chooseCard,
    setChooseCard,
  } = useContext(Store);

  const firstRef = useRef();
  const fileRef = useRef();
  const navigate = useNavigate();
  // const frontComponentRef = useRef();
  // const [cardList, setCardList] = useState([
  //   {
  //     projectName: "Card1",
  //     progectBgColor: "red",
  //   },
  //   {
  //     projectName: "Card2",
  //     progectBgColor: "blue",
  //   },
  //   {
  //     projectName: "Card3",
  //     progectBgColor: "yellow",
  //   },
  // ]);

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
      localStorage.setItem("dataKey", JSON.stringify(values));
      setCardData(values);

      const fileInput = fileRef.current;
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        setUploadedImage(file);
      }
      navigate("/Alboms");
    },

    validationSchema: validationSchema,
  });

  console.log(chooseCard);

  return (
    <Grid className="main-form-grid">
      <Grid spacing={2} container id="mainBox">
        <Grid item xs={11} md={6} id="leftBox">
          <h2
            className="left-header"
            style={{ color: "#92CBCE", marginBottom: "10px" }}
          >
            Add your information
          </h2>
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {fields.map((field, i) => (
              <TextField
                name={field.name}
                size={field.size}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                placeholder={field.placeholder}
                type={field.type}
                key={i}
                ref={firstRef}
                error={
                  formik.touched[field.name] &&
                  Boolean(formik.errors[field.name])
                }
                helperText={
                  formik.touched[field.name] && formik.errors[field.name]
                }
              />
            ))}
            <Box className="file-input">
              {/* <input
                ref={fileRef}
                type="file"
                name="logo"
                style={{ marginTop: "10px" }}
              /> */}

              <input
                ref={fileRef}
                type="file"
                name="logo"
                id="file-input"
                class="file-input__input"
              />
              <label class="file-input__label" for="file-input">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="upload"
                  class="svg-inline--fa fa-upload fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
                <span>Upload file</span>
              </label>
            </Box>
            <Button
              onClick={() => postData(formik.values)}
              style={{ marginTop: "20px", marginBottom: "20px" }}
              size="large"
              id="choose-button"
              type="submit"
              variant="contained"
              sx={{
                width: "350px",
                height: "45px",
                bgcolor: "#92CBCE",
                display: "block",
                borderRadius: "20px",
                mt: 5,
                m: "auto",
                transition: ".3s linear",
                "&:hover": {
                  bgcolor: "brown",
                },
              }}
            >
              Generate Your Business card
            </Button>
          </Box>
        </Grid>
        {/* <Grid item xs={11} md={6} id="rightBox">
          <Print />
          <Carouselly onImageClick={handleImageClick} />
          {console.log("Card chosen:", cards[Number(chooseCard) - 1])}
       
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
        </Grid> */}
      </Grid>
    </Grid>
  );
}

export default Form;
