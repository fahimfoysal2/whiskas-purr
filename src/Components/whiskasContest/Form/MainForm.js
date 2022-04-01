import React, { useState } from "react";
import AnimalsInfo from "./AnimalsInfo";
import PersionalInfo from "./PersionalInfo";

function MainForm() {
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
    <div className="form">
      <div className="progressbar">
        <div>{page === 0 ? "50%" : page == 1 ? "100%" : "100%"}</div>
      </div>
      <div className="form-container">
        {/* <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div> */}
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
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
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
