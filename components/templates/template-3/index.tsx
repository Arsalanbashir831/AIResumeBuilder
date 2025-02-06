import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import {
	Achievement,
	Certificate,
	EducationItem,
	ExperienceItem,
	Language,
	Project,
} from "@/types/global";
import React from "react";
import Certificates from "./sections/Certificates";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Header from "./sections/Header";
import Languages from "./sections/Languages";
import ProfileImage from "./sections/ProfileImage";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Summary from "./sections/Summary";

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
			certificates: Certificate[];
			languages: Language[];
			projects: Project[];
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
			<main className='bg-white mx-auto p-4'>
				<div className='grid grid-cols-3 gap-8'>
					{/* Sidebar */}
					<div>
						<ProfileImage
							imageUrl={data.sections.personalInfo.profileImage}
							alt={data.sections.personalInfo.name}
						/>

						{/* Skills */}
						<Skills skills={data.sections.skills} />

						{/* Certificates */}
						<Certificates certificates={data.sections.certificates} />

						{/* Languages */}
						<Languages languages={data.sections.languages} />

						{/* References */}
						{/* <References /> */}
					</div>

					{/* Main Content */}
					<div className='col-span-2'>
						{/* Header Section */}
						<Header
							name={data.sections.personalInfo.name}
							location={data.sections.personalInfo.contact.location}
							email={data.sections.personalInfo.contact.email}
							phone={data.sections.personalInfo.contact.phone}
							link={data.sections.personalInfo.contact.link}
							tagline={data.sections.personalInfo.title}
						/>

						{/* Summary */}
						<Summary summary={data.sections.summary} />

						{/* Experience */}
						<Experience experiences={data.sections.experience} />

						{/* Education */}
						<Education educations={data.sections.educations} />

						{/* Projects */}
						<Projects projects={data.sections.projects} />
					</div>
				</div>
			</main>
		</div>
	);
};

export default ResumeTemplate;
