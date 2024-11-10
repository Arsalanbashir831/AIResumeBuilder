"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Template1 from "@/components/templates/template-1/template-1";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import React, { useState } from "react";
import { SectionKey, TemplateData } from "@/types/global";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import ExperienceField from "@/components/ExperienceField";
import { Badge } from "@/components/ui/badge";

export default function TemplateEditor() {
	// Manage the step state for navigation between resume creation steps
	const [step, setStep] = useState(1);

	// Initialize resumeData state
	const [resumeData, setResumeData] = useState<TemplateData>(
		DUMMY_TEMPLATES_DATA[1]
	);

	// Handle changes in any section of the resume
	const handleInputChange = (
		section: SectionKey,
		field: string | null,
		value: any
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

	// Navigate between steps (e.g., between different parts of the resume)
	const handleStepChange = (newStep: React.SetStateAction<number>) => {
		setStep(newStep);
	};

	// Handle changes to individual experience items
	const handleExperienceInputChange = (
		index: number,
		field: string,
		value: string | boolean | string[]
	) => {
		setResumeData((prevData) => {
			const updatedExperience = [...prevData.sections.experience];
			updatedExperience[index] = {
				...updatedExperience[index],
				[field]: value,
			};
			return {
				...prevData,
				sections: {
					...prevData.sections,
					experience: updatedExperience,
				},
			};
		});
	};

	// Add a new experience entry to the resume
	const handleAddExperience = () => {
		setResumeData((prevData) => ({
			...prevData,
			sections: {
				...prevData.sections,
				experience: [
					...prevData.sections.experience,
					{
						title: "",
						company: "",
						startDate: "",
						endDate: "",
						isCurrent: false,
						location: "",
						achievements: [],
					},
				],
			},
		}));
	};

	// Delete an experience entry from the resume
	const handleDeleteExperience = (index: number) => {
		setResumeData((prevData) => {
			const updatedExperience = prevData.sections.experience.filter(
				(_, i) => i !== index
			);
			return {
				...prevData,
				sections: {
					...prevData.sections,
					experience: updatedExperience,
				},
			};
		});
	};

	return (
		<div className='flex h-screen p-8 pt-24 container mx-auto'>
			{/* Step-by-Step Form */}
			<div className='w-1/2 pr-4'>
				{/* Navigation Buttons */}
				<div className='flex space-x-2 mb-4'>
					<Button
						variant={step === 1 ? "default" : "secondary"}
						onClick={() => handleStepChange(1)}>
						Personal Info
					</Button>
					<Button
						variant={step === 2 ? "default" : "secondary"}
						onClick={() => handleStepChange(2)}>
						Summary
					</Button>
					<Button
						variant={step === 3 ? "default" : "secondary"}
						onClick={() => handleStepChange(3)}>
						Experience
					</Button>
					<Button
						variant={step === 4 ? "default" : "secondary"}
						onClick={() => handleStepChange(4)}>
						Skills
					</Button>
				</div>

				<Card className='shadow-lg my-6'>
					<CardContent className='p-6'>
						{/* Step 1: Personal Info */}
						{step === 1 && (
							<div>
								<h3 className='text-lg font-semibold mb-2'>
									Personal Information
								</h3>
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
						)}

						{/* Step 2: Summary */}
						{step === 2 && (
							<div>
								<h3 className='text-lg font-semibold mb-2'>Summary</h3>
								<TextAreaField
									label='Professional Summary'
									value={resumeData.sections.summary}
									onChange={(value) => handleInputChange("summary", "", value)}
								/>
							</div>
						)}

						{/* Step 3: Experience */}
						{step === 3 && (
							<div>
								<div className='flex justify-between items-center'>
									<h3 className='text-lg font-semibold mb-2'>Experience</h3>
									<Button
										type='button'
										size='sm'
										className='mt-4 px-4 py-2 text-white rounded-lg'
										onClick={handleAddExperience}>
										Add
									</Button>
								</div>
								{resumeData.sections.experience.map((exp, index) => (
									<div key={index} className='border-dashed border-b-2 pb-4'>
										<ExperienceField
											experience={exp}
											onChange={(field, value) =>
												handleExperienceInputChange(index, field, value)
											}
											index={index}
										/>
										<Button
											type='button'
											size='sm'
											variant='destructive'
											className='mt-2'
											onClick={() => handleDeleteExperience(index)}>
											Delete
										</Button>
									</div>
								))}
							</div>
						)}

						{/* Step 4: Skills */}
						{step === 4 && (
							<div>
								<h3 className='text-lg font-semibold mb-2'>Skills</h3>

								<InputField
									label='Skill'
									value={resumeData.sections.skills[0]}
									onChange={(value) => handleInputChange("skills", "", value)}
								/>

								{/* Display the skills as badges */}
								<div className='flex flex-wrap gap-2 mt-2'>
									{resumeData.sections.skills.map((skill, index) => (
										<Badge key={index}>{skill}</Badge>
									))}
								</div>
							</div>
						)}

						{/* Navigation buttons */}
						<div className='flex justify-between mt-6'>
							<Button onClick={() => setStep(step - 1)} disabled={step === 1}>
								Previous
							</Button>
							<Button onClick={() => setStep(step + 1)} disabled={step === 3}>
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
