import React, { useState } from "react";

import { Stepper, Step, StepLabel,Button, Typography } from "@material-ui/core";
import FormOne from "./form1";
import FormTwo from "./form2";
import FormThree from "./form3";


function getStepContent(stepIndex,handleNext) {
    switch (stepIndex) {
      case 0:
        return <FormOne handleNext={handleNext}/>;
      case 1:
        return <FormTwo handleNext={handleNext}/>;
      case 2:
        return <FormThree handleNext={handleNext}/>;
      default:
        return 'Unknown stepIndex';
    }
  }


function StepperForm() {

    const [activestep, setActiveStep] = useState(0)
    const steps = ['Form 1 out of 2', 'Form 2 out of 2'];


    const handleNext = () => {
        console.log("Clicking Next")
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    return (
        <>
            <div className=''>
                <Stepper  activeStep={activestep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {activestep == steps.length 
                ? "Full"
                : 
                <Typography>{getStepContent(activestep,handleNext)}</Typography> 
                
                }
            </div>
        </>
    )
}

export default StepperForm