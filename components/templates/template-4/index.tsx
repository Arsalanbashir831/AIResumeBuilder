import React, { useEffect, useState } from "react";
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
	const [scale, setScale] = useState(1);

	useEffect(() => {
		const handleResize = () => {
			const viewportWidth = window.innerWidth;
			if (viewportWidth < 640) {
				setScale(0.35);
			} else if (viewportWidth < 768) {
				setScale(0.5);
			} else if (viewportWidth < 1024) {
				setScale(0.65);
			} else {
				setScale(1);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className='flex justify-center items-center'>
			<main
				style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
				className='w-[8.5in] bg-white origin-top-left mx-auto p-4'>
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
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Main Content */}
					<div className='md:col-span-2'>
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
