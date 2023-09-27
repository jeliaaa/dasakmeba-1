import React, { useEffect } from 'react';
import './progress.scss';
const ProgressComponent = ({ currentStep, subject }) => {
    const steps = [
        {id:1, heading: 'პირობები'},
        {id:2, heading: 'მოთხოვნები'},
        {id:3, heading: 'ინფორმაცია'},
    ]; // Adjusted steps array to have steps 1, 2, 3

    return (
        <div className="progress-bar">
            {steps.map((step) => (
                <div key={step.id} className={step.id === currentStep ? 'step active' : 'step'}>
                    {step.id}. {step.heading}
                </div>
            ))}
        </div>
    );
};

export default ProgressComponent;
