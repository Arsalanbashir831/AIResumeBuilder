"use client";

import { useState } from "react";
import PersonalInfoStep from "./steps/PersonalInfoStep";
import EducationStep from "./steps/EducationStep";
import ResumePreview from "../previews/ResumePreview";

const steps = [
	{ id: 1, name: "Personal Information", component: PersonalInfoStep },
	{ id: 2, name: "Education", component: EducationStep },
	// Add more steps here
];

export default function MultiStepForm() {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({});

	const handleNext = (data: {}) => {
		setFormData((prev) => ({ ...prev, ...data }));
		setCurrentStep((prev) => prev + 1);
	};

	const handleBack = () => {
		setCurrentStep((prev) => prev - 1);
	};

	const CurrentStepComponent = steps[currentStep].component;

	return (
		<div className='multi-step-form-container flex'>
			<div className='form-section'>
				<CurrentStepComponent
					data={formData}
					onNext={handleNext}
					onBack={handleBack}
					isFirstStep={currentStep === 0}
					isLastStep={currentStep === steps.length - 1}
				/>
			</div>
			<ResumePreview formData={formData} />
		</div>
	);
}
