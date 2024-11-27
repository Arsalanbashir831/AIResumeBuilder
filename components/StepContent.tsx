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
import { aiGenerationSection } from "@/app/api/resume";
import { useState } from "react";

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
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

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
						<AiButton
							onClick={async () => {
								setLoading(true);
								setError(null);
								try {
									const token = localStorage.getItem("accessToken");
									if (!token) {
										throw new Error("Authentication token is missing. Please log in.");
									}
									const data = await aiGenerationSection(token, {
										sectionType: "objectives",
									});
									// console.log(data.generated_section);
									
									handleInputChange("summary", null, data.generated_section);
								} catch (err: any) {
									setError(
										err?.message || "Failed to generate content. Please try again."
									);
								} finally {
									setLoading(false);
								}
							}}
							loading={loading} // Optional: Show loading state in the AI button
						/>
					</div>
					{error && (
						<div className='text-red-500 text-sm mb-2'>
							{error}
						</div>
					)}
					<TextAreaField
						value={resumeData.sections.summary}
						onChange={(value) => handleInputChange("summary", null, value)}
					/>
				</div>
			);
		case "experience":
			return (
				<ExperienceStep
					experiences={resumeData.sections.experience}
					onChange={(updatedExperiences) =>
						handleInputChange("experience", null, updatedExperiences)
					}
					fieldsIncluded={fieldsIncluded}
				/>
			);
		case "skills":
			return (
				<SkillsStep
					skills={resumeData.sections.skills}
					onChange={(updatedSkills) =>
						handleInputChange("skills", null, updatedSkills)
					}
				/>
			);
		case "achievements":
			return (
				<AchievementsStep
					achievements={resumeData.sections.achievements}
					onChange={(updatedAchievements) =>
						handleInputChange("achievements", null, updatedAchievements)
					}
				/>
			);
		case "strengths":
			return (
				<AchievementsStep
					achievements={resumeData.sections.strengths}
					onChange={(updatedAchievements) =>
						handleInputChange("strengths", null, updatedAchievements)
					}
				/>
			);
		case "certificates":
			return (
				<CertificatesStep
					certificates={resumeData.sections.certificates}
					onChange={(updatedCertificate) =>
						handleInputChange("certificates", null, updatedCertificate)
					}
				/>
			);
		case "hobbies":
			return (
				<HobbiesStep
					hobbies={resumeData.sections.hobbies}
					onChange={(updatedHobbies) =>
						handleInputChange("hobbies", null, updatedHobbies)
					}
				/>
			);
		case "educations":
			return (
				<EducationStep
					educations={resumeData.sections.educations}
					onChange={(updatedEducations) =>
						handleInputChange("educations", null, updatedEducations)
					}
					fieldsIncluded={fieldsIncluded}
				/>
			);
		case "additionalExperience":
			return (
				<ExperienceStep
					experiences={resumeData.sections.additionalExperience}
					onChange={(updatedExperiences) =>
						handleInputChange("additionalExperience", null, updatedExperiences)
					}
				/>
			);
		case "expertise":
			return (
				<ExpertiseStep
					expertise={resumeData.sections.expertise}
					onChange={(updatedExpertise) =>
						handleInputChange("expertise", null, updatedExpertise)
					}
				/>
			);
		case "projects":
			return (
				<ProjectsStep
					projects={resumeData.sections.projects}
					onChange={(updatedProjects) =>
						handleInputChange("projects", null, updatedProjects)
					}
				/>
			);
		case "languages":
			return (
				<LanguagesStep
					language={resumeData.sections.languages}
					onChange={(updatedLanguages) =>
						handleInputChange("languages", null, updatedLanguages)
					}
				/>
			);
		default:
			return null;
	}
};

export default StepContent;
