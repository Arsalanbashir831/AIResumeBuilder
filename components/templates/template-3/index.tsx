import React from "react";
import Header from "./sections/Header";
import Summary from "./sections/Summary";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import { Achievement, EducationItem, ExperienceItem } from "@/types/global";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";

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
		? templateData ?? DUMMY_TEMPLATES_DATA[1]
		: DUMMY_TEMPLATES_DATA[1];

	return (
		<div className='flex justify-center items-center'>
			<main className='w-[8.5in] bg-white origin-top-left mx-auto'>
				<Header
					profileImage={data.sections.personalInfo.profileImage}
					name={data.sections.personalInfo.name}
					email={data.sections.personalInfo.contact.email}
					phone={data.sections.personalInfo.contact.phone}
					link={data.sections.personalInfo.contact.link}
				/>
				<Summary summary={data.sections.summary} />
				<Experience experiences={data.sections.experience} />
				<Skills skills={data.sections.skills} />
			</main>
		</div>
	);
};

export default ResumeTemplate;
