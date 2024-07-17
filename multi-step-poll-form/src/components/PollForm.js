
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setAnswer, submitPoll } from '../features/pollSlice';
import { Button, Typography } from '@mui/material';
import './PollForm.css';

const steps = [
  { title: 'test 1', options: ['Option 1', 'Option 2'] },
  { title: 'test 2', options: ['Option 1', 'Option 2'] },
];

function PollForm() {
  const dispatch = useDispatch();
  const { currentStep, answers } = useSelector((state) => state.poll);

  const handleOptionClick = (option) => {
    dispatch(setAnswer(option));
  };

  const handleNext = () => {
    dispatch(setStep(currentStep + 1));
  };

  const handlePrevious = () => {
    dispatch(setStep(currentStep - 1));
  };

  const handleSubmit = () => {
    dispatch(submitPoll());
  };

  return (
    <div className="poll-form-container">
      <div className="left-panel">
        <Typography variant="h6">{steps[currentStep].title}</Typography>
        {steps[currentStep].options.map((option, index) => (
          <div
            key={index}
            className={`option ${answers[currentStep] === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="carousel">
        {currentStep === steps.length - 1 ? (
          <div className="summary">
            <Typography variant="h6">Summary</Typography>
            {steps.map((step, index) => (
              <div key={index}>
                <Typography variant="subtitle1">{step.title}</Typography>
                <Typography variant="body1">{answers[index]}</Typography>
              </div>
            ))}
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        ) : (
          <div>
            <Button onClick={handlePrevious} disabled={currentStep === 0}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PollForm;
