"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import {
	Achievement,
	EducationItem,
	ExperienceItem,
	SectionKey,
	TemplateData,
} from "@/types/global";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import SkillsStep from "@/components/forms/steps/SkillsStep";
import AchievementsStep from "@/components/forms/steps/AchievementsStep";
import EducationStep from "@/components/forms/steps/EducationStep";
import ExperienceStep from "@/components/forms/steps/ExperienceStep";
import { useParams, useRouter } from "next/navigation";
import { templates } from "@/data/templatesConfig";
import { ArrowLeft } from "lucide-react";
import AiButton from "@/components/AiButton";

// Modal component for subscription
const SubscriptionModal = ({ onClose }: { onClose: () => void }) => (
	<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20'>
		<div className='bg-white p-6 rounded-md shadow-lg max-w-sm w-full'>
			<h3 className='text-xl font-semibold mb-4'>Subscribe to Download</h3>
			<p className='mb-4'>
				To download your resume, please subscribe to our service.
			</p>
			<div className='flex justify-end space-x-4'>
				<Button variant='secondary' onClick={onClose}>
					Close
				</Button>
				<Button variant='default'>Subscribe Now</Button>
			</div>
		</div>
	</div>
);

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
		value:
			| string
			| { [key: string]: string }
			| ExperienceItem[]
			| string[]
			| Achievement[]
			| EducationItem[]
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
					<div className='flex justify-between items-center mb-4'>
						<h3 className='text-lg font-semibold mb-2'>Summary</h3>
						<AiButton />
					</div>

					<TextAreaField
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
	const { templateId } = useParams();
	const router = useRouter();

	const template = templates.find((t) => t.id === Number(templateId));
	const [showModal, setShowModal] = useState(false);

	if (!template) {
		return <p>Template not found</p>;
	}

	const handleInputChange = (
		section: SectionKey,
		field: string | null,
		value:
			| string
			| { [key: string]: string }
			| ExperienceItem[]
			| string[]
			| Achievement[]
			| EducationItem[]
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

	const handleStepChange = (newStep: React.SetStateAction<number>) => {
		setStep(newStep);
	};

	// Function to handle download button click
	const handleDownloadClick = () => {
		setShowModal(true); // Show the subscription popup when the download button is clicked
	};

	return (
		<div className='flex flex-col h-screen p-8 pt-24 container mx-auto'>
			{/* Header Section */}
			<header className='flex justify-start items-center mb-4'>
				<Button variant='default' onClick={() => router.push("/dashboard/")}>
					<ArrowLeft size={24} />
					To Dashboard
				</Button>
			</header>
			<div className='flex flex-col lg:flex-row-reverse gap-5'>
				{/* Modal */}
				{showModal && <SubscriptionModal onClose={() => setShowModal(false)} />}

				{/* Live Preview with fixed aspect ratio and responsive scaling */}
				<div className='w-full lg:w-1/2'>
					<div className='flex justify-end items-center mb-4'>
						<Button variant='default' onClick={handleDownloadClick}>
							Download
						</Button>
					</div>

					<Card className='shadow-lg'>
						<CardContent className='p-4 '>
							<template.component templateData={resumeData} isEditing={true} />
						</CardContent>
					</Card>
				</div>

				{/* Step-by-Step Form */}
				<div className='w-full lg:w-1/2'>
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
							<StepContent
								step={step}
								resumeData={resumeData}
								handleInputChange={handleInputChange}
							/>
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
			</div>
		</div>
	);
}
