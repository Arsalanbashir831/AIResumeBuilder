import Header from "./sections/Header";
import Summary from "./sections/Summary";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import AdditionalExperience from "./sections/AdditionalExperience";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import { Achievement } from "@/types/global";

const ResumeTemplate = ({
	isEditing = false,
	templateData,
}: {
	isEditing?: boolean;
	templateData?: {
		sections: {
			personalInfo: {
				name: string;
				title: string;
				contact: {
					email: string;
					phone: string;
					link: string;
				};
			};
			summary: string;
			experience: {
				title: string;
				company: string;
				startDate: string;
				endDate: string;
				location: string;
				isCurrent: boolean;
				achievements: string[];
			}[];
			skills: string[];
			achievements: Achievement[];
			educations: {
				degree: string;
				institution: string;
				startDate: string;
				endDate: string;
				isCurrent: boolean;
			}[];
			additionalExperience: {
				title: string;
				company: string;
				startDate: string;
				endDate: string;
				isCurrent: boolean;
				location: string;
				achievements: string[];
			}[];
		};
	};
}) => {
	const data = isEditing
		? templateData ?? DUMMY_TEMPLATES_DATA[0]
		: DUMMY_TEMPLATES_DATA[0];

	return (
		<div className='flex justify-center items-center'>
			<main className='w-[8.5in] bg-white shadow-lg origin-top-left mx-auto'>
				<Header
					name={data.sections.personalInfo.name}
					email={data.sections.personalInfo.contact.email}
					phone={data.sections.personalInfo.contact.phone}
					link={data.sections.personalInfo.contact.link}
					position={data.sections.personalInfo.title}
				/>
				<div className='grid grid-cols-12 gap-8 mt-8 px-10 h-full'>
					<div className='col-span-7 h-full'>
						<Summary summary={data.sections.summary} />
						<Experience experiences={data.sections.experience} />
					</div>
					<div className='col-span-5 h-full'>
						<Skills skills={data.sections.skills} />
						<Achievements
							achievements={data.sections.achievements.map((achievement) =>
								typeof achievement === "string"
									? { title: achievement, description: "" }
									: achievement
							)}
						/>
						<Education educations={data.sections.educations} />
						<AdditionalExperience
							additionalExperience={data.sections.additionalExperience}
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ResumeTemplate;
