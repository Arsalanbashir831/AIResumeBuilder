"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Template1 from "@/components/templates/template-1/template-1";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import React, { useState } from "react";
import { SectionKey, TemplateData } from "@/types/global";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import SkillsStep from "@/components/forms/steps/SkillsStep";
import AchievementsStep from "@/components/forms/steps/AchievementsStep";
import EducationStep from "@/components/forms/steps/EducationStep";
import ExperienceStep from "@/components/forms/steps/ExperienceStep";

// Step component to handle rendering of each section
const StepContent = ({
	step,
	resumeData,
	handleInputChange,
}: {
	step: number;
	resumeData: TemplateData;
	handleInputChange: (
		section: SectionKey,
		field: string | null,
		value: string | number | object
	) => void;
}) => {
	switch (step) {
		case 1:
			return (
				<div>
					<h3 className='text-lg font-semibold mb-2'>Personal Information</h3>
					<InputField
						label='Name'
						value={resumeData.sections.personalInfo.name}
						onChange={(value) =>
							handleInputChange("personalInfo", "name", value)
						}
					/>
					<InputField
						label='Position'
						value={resumeData.sections.personalInfo.title}
						onChange={(value) =>
							handleInputChange("personalInfo", "title", value)
						}
					/>
					<InputField
						label='Email'
						value={resumeData.sections.personalInfo.contact.email}
						onChange={(value) =>
							handleInputChange("personalInfo", "contact", {
								...resumeData.sections.personalInfo.contact,
								email: value,
							})
						}
					/>
					<InputField
						label='Phone'
						value={resumeData.sections.personalInfo.contact.phone}
						onChange={(value) =>
							handleInputChange("personalInfo", "contact", {
								...resumeData.sections.personalInfo.contact,
								phone: value,
							})
						}
					/>
				</div>
			);
		case 2:
			return (
				<div>
					<h3 className='text-lg font-semibold mb-2'>Summary</h3>
					<TextAreaField
						label='Professional Summary'
						value={resumeData.sections.summary}
						onChange={(value) => handleInputChange("summary", "", value)}
					/>
				</div>
			);
		case 3:
			return (
				<div>
					<ExperienceStep
						experiences={resumeData.sections.experience}
						onChange={(updatedExperiences) =>
							handleInputChange("experience", "", updatedExperiences)
						}
					/>
				</div>
			);
		case 4:
			return (
				<div>
					<SkillsStep
						skills={resumeData.sections.skills}
						onChange={(updatedSkills) =>
							handleInputChange("skills", "", updatedSkills)
						}
					/>
				</div>
			);
		case 5:
			return (
				<div>
					<AchievementsStep
						achievements={resumeData.sections.achievements}
						onChange={(updatedAchievements) =>
							handleInputChange("achievements", "", updatedAchievements)
						}
					/>
				</div>
			);
		case 6:
			return (
				<div>
					<EducationStep
						educations={resumeData.sections.educations}
						onChange={(updatedEducations) =>
							handleInputChange("educations", "", updatedEducations)
						}
					/>
				</div>
			);
		case 7:
			return (
				<div>
					<ExperienceStep
						experiences={resumeData.sections.additionalExperience}
						onChange={(updatedExperiences) =>
							handleInputChange("additionalExperience", "", updatedExperiences)
						}
					/>
				</div>
			);
		default:
			return null;
	}
};

export default function TemplateEditor() {
	const [step, setStep] = useState(1);
	const [resumeData, setResumeData] = useState<TemplateData>(
		DUMMY_TEMPLATES_DATA[1]
	);

	const handleInputChange = (
		section: SectionKey,
		field: string | null,
		value: string | number | object
	) => {
		setResumeData((prevData) => ({
			...prevData,
			sections: {
				...prevData.sections,
				[section]: field
					? {
							...(typeof prevData.sections[section] === "object"
								? prevData.sections[section]
								: {}),
							[field]: value,
					  }
					: value,
			},
		}));
	};

	// Handle step navigation
	const handleStepChange = (newStep: React.SetStateAction<number>) => {
		setStep(newStep);
	};

	return (
		<div className='flex h-screen p-8 pt-24 container mx-auto'>
			{/* Step-by-Step Form */}
			<div className='w-1/2 pr-4'>
				{/* Navigation Buttons */}
				<div className='flex space-x-2 mb-4 overflow-x-auto whitespace-nowrap'>
					{[
						"Personal Info",
						"Summary",
						"Experience",
						"Skills",
						"Achievements",
						"Education",
						"Additional Experience",
					].map((label, idx) => (
						<Button
							key={label}
							variant={step === idx + 1 ? "default" : "secondary"}
							onClick={() => handleStepChange(idx + 1)}>
							{label}
						</Button>
					))}
				</div>

				<Card className='shadow-lg my-6'>
					<CardContent className='p-6'>
						{/* Step Content */}
						<StepContent
							step={step}
							resumeData={resumeData}
							handleInputChange={handleInputChange}
						/>

						{/* Navigation Buttons */}
						<div className='flex justify-between mt-6'>
							<Button onClick={() => setStep(step - 1)} disabled={step === 1}>
								Previous
							</Button>
							<Button onClick={() => setStep(step + 1)} disabled={step === 7}>
								Next
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Live Preview */}
			<div className='w-1/2 pl-4 border-l border-gray-300'>
				<Card className='shadow-lg'>
					<CardContent className='p-0'>
						<Template1 isEditing templateData={resumeData} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
