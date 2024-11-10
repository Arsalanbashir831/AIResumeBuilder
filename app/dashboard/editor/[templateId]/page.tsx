"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Template1 from "@/components/templates/template-1/template-1";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import React, { useState } from "react";
import { SectionKey, TemplateData } from "@/types/global";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import ExperienceField from "@/components/ExperienceField";
import { Badge } from "@/components/ui/badge";

export default function TemplateEditor() {
	const [step, setStep] = useState(1); // Track which step the user is on
	const [templateData, setTemplateData] = useState<TemplateData>(
		DUMMY_TEMPLATES_DATA[1]
	);

	const handleInputChange = (
		section: SectionKey,
		field: string | null,
		value: any
	) => {
		setTemplateData((prevData) => {
			console.log(prevData); // Log the previous state for debugging
			return {
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
			};
		});
	};

	// Handler for navigating steps
	const handleStepChange = (newStep: React.SetStateAction<number>) => {
		setStep(newStep);
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
									value={templateData.sections.personalInfo.name}
									onChange={(value) =>
										handleInputChange("personalInfo", "name", value)
									}
								/>
								<InputField
									label='Position'
									value={templateData.sections.personalInfo.title}
									onChange={(value) =>
										handleInputChange("personalInfo", "title", value)
									}
								/>
								<InputField
									label='Email'
									value={templateData.sections.personalInfo.contact.email}
									onChange={(value) =>
										handleInputChange("personalInfo", "contact", {
											...templateData.sections.personalInfo.contact,
											email: value,
										})
									}
								/>
								<InputField
									label='Phone'
									value={templateData.sections.personalInfo.contact.phone}
									onChange={(value) =>
										handleInputChange("personalInfo", "contact", {
											...templateData.sections.personalInfo.contact,
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
									value={templateData.sections.summary}
									onChange={(value) => handleInputChange("summary", "", value)}
								/>
							</div>
						)}

						{/* Step 3: Experience */}
						{step === 3 && (
							<div>
								<h3 className='text-lg font-semibold mb-2'>Experience</h3>
								{templateData.sections.experience?.map((exp, index) => (
									<ExperienceField
										key={index}
										experience={exp}
										onChange={(field, value) =>
											handleInputChange("experience", field, value)
										}
										index={index}
									/>
								))}
							</div>
						)}

						{/* Step 4: Skills */}
						{step === 4 && (
							<div>
								<h3 className='text-lg font-semibold mb-2'>Skills</h3>

								<InputField
									label='Skill'
									value={templateData.sections.skills[0]}
									onChange={(value) => handleInputChange("skills", "", value)}
								/>

								{/* Display the skills as badges */}
								<div className='flex flex-wrap gap-2 mt-2'>
									{templateData.sections.skills.map((skill, index) => (
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
						<Template1 isEditing templateData={templateData} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
