import React, { useEffect, useState } from "react";
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
				className='w-[8.5in] bg-white origin-top-left mx-auto'>
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
