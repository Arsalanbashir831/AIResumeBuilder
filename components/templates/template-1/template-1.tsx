import Header from "./sections/Header";
import Summary from "./sections/Summary";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import AdditionalExperience from "./sections/AdditionalExperience";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";

const Template1 = ({
	isEditing = false,
	templateData,
}: {
	isEditing?: boolean;
	templateData?: any;
}) => {
	const data = isEditing ? templateData : DUMMY_TEMPLATES_DATA[0];

	return (
		<div className='max-w-4xl mx-auto bg-white'>
			<Header
				name={data.sections.personalInfo.name}
				email={data.sections.personalInfo.contact.email}
				phone={data.sections.personalInfo.contact.phone}
				link={data.sections.personalInfo.contact.website}
				position={data.sections.personalInfo.title}
			/>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 px-10'>
				<div className='md:col-span-7'>
					<Summary summary={data.sections.summary} />
					<Experience experiences={data.sections.experience} />
				</div>
				<div className='md:col-span-5'>
					<Skills skills={data.sections.skills} />
					<Achievements achievements={data.sections.achievements} />
					<Education educations={data.sections.educations} />
					<AdditionalExperience />
				</div>
			</div>
		</div>
	);
};

export default Template1;
