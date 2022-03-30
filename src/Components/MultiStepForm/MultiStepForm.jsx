import { Steps } from "antd";
import React, { useState } from "react";
import Address from "./Address";
import Details from "./Details";
import activeIcon from "./img/iconActive.svg";
import deActiveIcon from "./img/iconDeactive.svg";
import { Provider } from "./MultiStepFormContext";
const { Step } = Steps;

const detailsInitialState = {
  name: "",
  age: "",
  profession: "",
};

const addressInitialState = {
  address1: "",
  address2: "",
  city: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <Address />;

    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [details, setDetails] = useState(detailsInitialState);
  const [address, setAddress] = useState(addressInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep === 1) {
      setCurrentStep(0);
      setDetails(detailsInitialState);
      setAddress(addressInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  const prev = () => setCurrentStep(currentStep - 1);
  return (
    <Provider value={{ details, setDetails, next, prev, address, setAddress }}>
      <Steps current={currentStep}>
        <Step title={<img src={activeIcon} onClick={prev} alt="" />} />
        <Step title={<img src={deActiveIcon} alt="" />} />
      </Steps>
      <main>{renderStep(currentStep)}</main>
    </Provider>
  );
};
export default MultiStepForm;
