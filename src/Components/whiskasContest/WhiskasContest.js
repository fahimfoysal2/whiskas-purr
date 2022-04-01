import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AnimalsInfo from "./Form/AnimalsInfo";
import PersionalInfo from "./Form/PersionalInfo";
import bgImage from "./img/bgImage.png";
import navIconActive from "./img/iconActive.svg";
import navDeIconActive from "./img/iconDeactive.svg";
import "./musicContest.scss";
const WhiskasContest = () => {
  const [inputField, setInputField] = useState("");
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <AnimalsInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersionalInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div>
      <div className="music-playerinner-wrap">
        <Container>
          <div className="music-player-inner-content-wrap">
            <div
              className="music-contest-toptitle-wrap"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <h2>
                PURR to <span>Win</span> !
              </h2>
            </div>
            <div className="music-contest-content-wrap">
              <p>
                <b>Want to share your feline’s purr loud and proud?</b>
                <br /> Simply leave us your details and upload your cat’s best
                and most beautiful purr, and you’ll be in to win
                {/* {1 month worth free WHISKAS® Wet Food}! */}
              </p>
            </div>
            <div
              className={
                inputField
                  ? "music-contest-data-upload-wrap file-upload-proccesing"
                  : "music-contest-data-upload-wrap "
              }
            >
              {/* <div className="contest-navbar-icon">
                <span>
                  <img src={activeIcon} alt="" />
                  <img src={deActiveIcon} alt="" />
                </span>
                <p>Step 1 of 2</p>
              </div> */}
              <div className="content-content-main-form">
                <div className="form">
                  <div className="progressbar">
                    <div>
                      {page === 0 ? (
                        <div className="form-navbar-main-btn-area-">
                          <button className="form-navbar-main-kmgf p-0">
                            <img src={navIconActive} alt="" />
                          </button>
                          <img src={navDeIconActive} alt="" />
                          <p>Step 1 of 2 </p>
                        </div>
                      ) : page == 1 ? (
                        <div
                          className="form-navbar-main-btn-area-next"
                          onClick={() => {
                            setPage((currPage) => currPage - 1);
                          }}
                        >
                          <button className=" ">
                            <img src={navIconActive} alt="" />
                          </button>
                          <img src={navIconActive} alt="" />
                          <p>Step 2 of 2 </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-container">
                    <div className="form-content-view">{PageDisplay()}</div>
                    <div className="mt-5">
                      {page == 0 ? (
                        <div className="form-navbar-main-btn-area">
                          <button
                            onClick={() => {
                              if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                              } else {
                                setPage((currPage) => currPage + 1);
                              }
                            }}
                          >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                          </button>
                        </div>
                      ) : page == 1 ? (
                        <div className="form-navbar-main-btn-area next">
                          <button
                            className="preview-back-btn"
                            disabled={page == 0}
                            onClick={() => {
                              setPage((currPage) => currPage - 1);
                            }}
                          >
                            Back
                          </button>
                          <button
                            onClick={() => {
                              if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                              } else {
                                setPage((currPage) => currPage + 1);
                              }
                            }}
                          >
                            {page === FormTitles.length - 1
                              ? "Put my best PURR forward"
                              : "Next"}
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="add-form-next-data-area mt-5">
                      {page == 1 ? (
                        <p>
                          Disclaimer: By submitting this form I confirm that I’m
                          14 or over.
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhiskasContest;
