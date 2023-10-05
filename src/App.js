import React, { useState } from "react";
import "./index.css";
import { Button } from "./components/Button";

const messages = [
  "Learn Advance React ⚛️",
  "App in Software House 💼",
  "Earn & Invest it 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    // if (step < 3) setStep(step + 1);   do not update the state based on current state
    if (step < 3) setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <Button
              textColor="#fff"
              backgroundColor="#4df"
              onClick={handlePrevious}
            >
              Previous
            </Button>
            <Button
              textColor="#fff"
              backgroundColor="#4df"
              onClick={handleNext}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
