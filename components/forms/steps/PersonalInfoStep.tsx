import React from "react";
import InputField from "@/components/InputField";
import {
	TemplateData,
	SectionKey,
	ExperienceItem,
	Achievement,
	EducationItem,
} from "@/types/global";

interface PersonalInfoStepProps {
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
	fieldsIncluded?: {
		name?: boolean;
		title?: boolean;
		email?: boolean;
		phone?: boolean;
		link?: boolean;
		profileImage?: boolean;
		location?: boolean;
	};
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
	resumeData,
	handleInputChange,
	fieldsIncluded = {
		name: true,
		title: true,
		email: true,
		phone: true,
		link: true,
		profileImage: true,
	},
}) => {
	const handleImageUpload = (file: File) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.result) {
				handleInputChange(
					"personalInfo",
					"profileImage",
					reader.result as string
				);
			}
		};
		reader.readAsDataURL(file);
	};

	return (
		<div>
			<h3 className='text-lg font-semibold mb-2'>Personal Information</h3>
			{fieldsIncluded.profileImage && (
				<InputField
					type='file'
					label='Profile Image'
					value=''
					onChange={(value) => {
						handleImageUpload(value as File);
					}}
				/>
			)}
			{fieldsIncluded.name && (
				<InputField
					label='Name'
					value={resumeData.sections.personalInfo.name}
					onChange={(value) =>
						handleInputChange("personalInfo", "name", value as string)
					}
				/>
			)}
			{fieldsIncluded.title && (
				<InputField
					label='Position'
					value={resumeData.sections.personalInfo.title}
					onChange={(value) =>
						handleInputChange("personalInfo", "title", value as string)
					}
				/>
			)}
			{fieldsIncluded.location && (
				<InputField
					label='Location'
					value={resumeData.sections.personalInfo.contact.location}
					onChange={(value) =>
						handleInputChange("personalInfo", "location", value as string)
					}
				/>
			)}
			{fieldsIncluded.email && (
				<InputField
					type='email'
					label='Email'
					value={resumeData.sections.personalInfo.contact.email}
					onChange={(value) =>
						handleInputChange("personalInfo", "contact", {
							...resumeData.sections.personalInfo.contact,
							email: value as string,
						})
					}
				/>
			)}
			{fieldsIncluded.phone && (
				<InputField
					label='Phone'
					value={resumeData.sections.personalInfo.contact.phone}
					onChange={(value) =>
						handleInputChange("personalInfo", "contact", {
							...resumeData.sections.personalInfo.contact,
							phone: value as string,
						})
					}
				/>
			)}
			{fieldsIncluded.link && (
				<InputField
					type='text'
					label='Link'
					value={resumeData.sections.personalInfo.contact.link}
					onChange={(value) =>
						handleInputChange("personalInfo", "contact", {
							...resumeData.sections.personalInfo.contact,
							link: value as string,
						})
					}
				/>
			)}
		</div>
	);
};

export default PersonalInfoStep;
