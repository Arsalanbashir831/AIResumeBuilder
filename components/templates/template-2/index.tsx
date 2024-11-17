import React from "react";
import { Achievement, EducationItem, ExperienceItem } from "@/types/global";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import Strengths from "./sections/Strengths";
import Summary from "./sections/Summary";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Header from "./sections/Header";

interface TemplateProps {
	templateData?: {
		sections: {
			personalInfo: {
				profileImage: string;
				name: string;
				title: string;
				contact: {
					email: string;
					phone: string;
					link: string;
					location: string;
				};
			};
			summary: string;
			skills: string[];
			achievements: Achievement[];
			experience: ExperienceItem[];
			educations: EducationItem[];
		};
	};
	isEditing?: boolean;
}

const ResumeTemplate: React.FC<TemplateProps> = ({
	templateData,
	isEditing = false,
}) => {
	const data = isEditing
		? templateData ?? DUMMY_TEMPLATES_DATA[2]
		: DUMMY_TEMPLATES_DATA[2];

	return (
		<div className='flex justify-center items-center'>
			<div className='w-[8.5in] bg-white shadow-lg origin-top-left mx-auto p-8'>
				{/* Header Section */}
				<Header
					profileImage={data.sections.personalInfo.profileImage}
					name={data.sections.personalInfo.name}
					email={data.sections.personalInfo.contact.email}
					phone={data.sections.personalInfo.contact.phone}
					link={data.sections.personalInfo.contact.link}
					tagline={data.sections.personalInfo.title}
					location={data.sections.personalInfo.contact.location}
				/>

				{/* Summary Section */}
				<Summary summary={data.sections.summary} />

				{/* Skills Section */}
				<Skills skills={data.sections.skills} />

				{/* Strengths Section */}
				<Strengths
					achievements={data.sections.achievements.map((achievement) =>
						typeof achievement === "string"
							? { title: achievement, description: "" }
							: achievement
					)}
				/>

				{/* Experience Section */}
				<Experience experiences={data.sections.experience} />

				{/* Education Section */}
				<Education educations={data.sections.educations} />
			</div>
		</div>
	);
};

export default ResumeTemplate;
