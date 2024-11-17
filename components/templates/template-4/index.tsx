import React from "react";
import Header from "./sections/Header";
import Summary from "./sections/Summary";
import Education from "./sections/Education";
import {
	Achievement,
	EducationItem,
	ExperienceItem,
	Expertise,
} from "@/types/global";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import Experience from "./sections/Experience";
import Strengths from "./sections/Strengths";
import Skills from "./sections/Skills";
import IndustryExpertise from "./sections/IndustryExpetise";

interface TemplateProps {
	templateData?: {
		sections: {
			personalInfo: {
				profileImage: string;
				name: string;
				title: string;
				contact: {
					location: string;
					email: string;
					phone: string;
					link: string;
				};
			};
			summary: string;
			skills: string[];
			achievements: Achievement[];
			strengths: Achievement[];
			experience: ExperienceItem[];
			educations: EducationItem[];
			expertise: Expertise[];
		};
	};
	isEditing?: boolean;
}

const ResumeTemplate: React.FC<TemplateProps> = ({
	templateData,
	isEditing = false,
}) => {
	const data = isEditing
		? templateData ?? DUMMY_TEMPLATES_DATA[0]
		: DUMMY_TEMPLATES_DATA[0];

	return (
		<div className='flex justify-center items-center'>
			<main className='bg-white mx-auto p-4'>
				{/* Header Section */}
				<Header
					name={data.sections.personalInfo.name}
					location={data.sections.personalInfo.contact.location}
					email={data.sections.personalInfo.contact.email}
					phone={data.sections.personalInfo.contact.phone}
					link={data.sections.personalInfo.contact.link}
					tagline={data.sections.personalInfo.title}
				/>

				{/* Two Column Layout */}
				<div className='grid grid-cols-3 gap-8'>
					{/* Main Content */}
					<div className='col-span-2'>
						{/* Summary */}
						<Summary summary={data.sections.summary} />

						{/* Education */}
						<Education educations={data.sections.educations} />

						{/* Experience */}
						<Experience experiences={data.sections.experience} />
					</div>

					{/* Sidebar */}
					<div>
						{/* Most Proud Of */}
						<Strengths
							heading='MOST PROUD OF'
							achievements={data.sections.achievements}
						/>

						{/* Skills */}
						<Skills skills={data.sections.skills} />

						{/* Strengths */}
						<Strengths
							heading='STRENGTHS'
							achievements={data.sections.strengths}
						/>

						{/* Industry Expertise */}
						<IndustryExpertise experties={data.sections.expertise} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default ResumeTemplate;
