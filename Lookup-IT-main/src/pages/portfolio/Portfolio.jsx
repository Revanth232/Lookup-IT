import React from 'react'
import "./Portfolio.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import image1 from '../../Assets/images/1 img.png'
import image2 from '../../Assets/images/2 img.png'
import image3 from '../../Assets/images/3 img.png'
import image4 from '../../Assets/images/4 img.png'
import image5 from '../../Assets/images/5 img.png'
import { Button } from "react-bootstrap";
// import baground from '../../Assets/images/baground.png'


const steps = [
    {
      label: "Step 1",
      description: "Description for Step 1",
      Image: image1,
    },
    {
      label: "Step 2",
      description: "Description for Step 2",
      Image: image2,
    },
    {
      label: "Step 3",
      description: "Description for Step 3",
      Image: image3,
    },
    {
      label: "Step 4",
      description: "Description for Step 4",
      Image: image4,
    },
    {
      label: "Step 5",
      description: "Description for Step 5",
      Image: image5,
    },
    {
      label: "Step 6",
      description: "Description for Step 6",
      Image: image3,
    },
  ];
  
  
  
  const VerticalLinearStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleStepClick = (step) => () => {
      setActiveStep(step);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    return (
      <div className="stepps">
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  onClick={handleStepClick(index)}
                  optional={
                    index === steps.length - 1 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <img className='steppstwo'src={step.Image} alt={`Step ${index + 1}`} />
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    );
  };


const Portfolio = () => {
  return (
    <>
    <div className='portfolio'>
        <div className='portfolio__main'>
          <div className='portfolio__main__head'>
            <p>Portfolio</p>
          </div>
          <div className='portfolio__main__sub'>
            <p>Find your dream job! We are always on the hunt for extraordinary talents</p>
          </div>
        </div>
    </div>
    <div className='ourworkport'>
        <div className='ourworkport__main'>
        <p className='our'>Our Past Work</p>
        <p className='all'> All</p>
        <p className='graphic'>Graphic Designing</p>
        <p className='web'>Web Development</p>
        <p className='App'>App Development</p>
        </div>
    </div>
    <VerticalLinearStepper/>
    </>
  )
}
export default Portfolio
