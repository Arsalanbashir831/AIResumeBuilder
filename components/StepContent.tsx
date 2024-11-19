import TextAreaField from "@/components/TextAreaField";
import SkillsStep from "@/components/forms/steps/SkillsStep";
import AchievementsStep from "@/components/forms/steps/AchievementsStep";
import EducationStep from "@/components/forms/steps/EducationStep";
import ExperienceStep from "@/components/forms/steps/ExperienceStep";
import AiButton from "@/components/AiButton";
import IntroductoryStep from "@/components/forms/steps/IntroductryStep";
import PersonalInfoStep from "@/components/forms/steps/PersonalInfoStep";
import ExpertiseStep from "@/components/forms/steps/ExpertiseStep";
import CertificatesStep from "@/components/forms/steps/CertificatesStep";
import HobbiesStep from "@/components/forms/steps/HobbiesStep";
import ProjectsStep from "@/components/forms/steps/ProjectsStep";
import {
	Achievement,
	Certificate,
	EducationItem,
	ExperienceItem,
	Expertise,
	Hobby,
	SectionKey,
	TemplateData,
} from "@/types/global";
import LanguagesStep from "./forms/steps/LanguagesStep";

const StepContent = ({
	sectionKey,
	resumeData,
	handleInputChange,
	fieldsIncluded,
}: {
	sectionKey: string;
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
			| Expertise[]
			| Certificate[]
			| Hobby[]
	) => void;
	fieldsIncluded?: { [key: string]: boolean | undefined };
}) => {
	if (sectionKey === "intro") {
		return <IntroductoryStep />;
	}

	switch (sectionKey) {
		case "personalInfo":
			return (
				<PersonalInfoStep
					resumeData={resumeData}
					handleInputChange={handleInputChange}
					fieldsIncluded={fieldsIncluded}
				/>
			);
		case "summary":
			return (
				<div>
					<div className='flex justify-between items-center mb-4'>
						<h3 className='text-lg font-semibold mb-2'>Summary</h3>
						<AiButton />
					</div>

					<TextAreaField
						value={resumeData.sections.summary}
						onChange={(value) => handleInputChange("summary", "", value)}
					/>
				</div>
			);
		case "experience":
			return (
				<div>
					<ExperienceStep
						experiences={resumeData.sections.experience}
						onChange={(updatedExperiences) =>
							handleInputChange("experience", "", updatedExperiences)
						}
						fieldsIncluded={fieldsIncluded}
					/>
				</div>
			);
		case "skills":
			return (
				<div>
					<SkillsStep
						skills={resumeData.sections.skills}
						onChange={(updatedSkills) =>
							handleInputChange("skills", "", updatedSkills)
						}
					/>
				</div>
			);
		case "achievements":
			return (
				<div>
					<AchievementsStep
						achievements={resumeData.sections.achievements}
						onChange={(updatedAchievements) =>
							handleInputChange("achievements", "", updatedAchievements)
						}
					/>
				</div>
			);
		case "strengths":
			return (
				<div>
					<AchievementsStep
						achievements={resumeData.sections.strengths}
						onChange={(updatedAchievements) =>
							handleInputChange("strengths", "", updatedAchievements)
						}
					/>
				</div>
			);
		case "certificates":
			return (
				<div>
					<CertificatesStep
						certificates={resumeData.sections.certificates}
						onChange={(updatedCertificate) =>
							handleInputChange("certificates", "", updatedCertificate)
						}
					/>
				</div>
			);
		case "hobbies":
			return (
				<div>
					<HobbiesStep
						hobbies={resumeData.sections.hobbies}
						onChange={(updatedHobbies) =>
							handleInputChange("hobbies", "", updatedHobbies)
						}
					/>
				</div>
			);
		case "educations":
			return (
				<div>
					<EducationStep
						educations={resumeData.sections.educations}
						onChange={(updatedEducations) =>
							handleInputChange("educations", "", updatedEducations)
						}
						fieldsIncluded={fieldsIncluded}
					/>
				</div>
			);
		case "additionalExperience":
			return (
				<div>
					<ExperienceStep
						experiences={resumeData.sections.additionalExperience}
						onChange={(updatedExperiences) =>
							handleInputChange("additionalExperience", "", updatedExperiences)
						}
					/>
				</div>
			);
		case "expertise":
			return (
				<div>
					<ExpertiseStep
						expertise={resumeData.sections.expertise}
						onChange={(updatedExpertise) =>
							handleInputChange("expertise", "", updatedExpertise)
						}
					/>
				</div>
			);
		case "projects":
			return (
				<div>
					<ProjectsStep
						projects={resumeData.sections.projects}
						onChange={(updatedProjects) =>
							handleInputChange("projects", "", updatedProjects)
						}
					/>
				</div>
			);
		case "languages":
			return (
				<div>
					<LanguagesStep
						language={resumeData.sections.languages}
						onChange={(updatedLanguages) =>
							handleInputChange("languages", "", updatedLanguages)
						}
					/>
				</div>
			);
		default:
			return null;
	}
};

export default StepContent;
