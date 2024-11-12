export interface PersonalInfo {
	profileImage: string;
	name: string;
	title: string;
	contact: {
		phone: string;
		email: string;
		location: string;
		link: string;
	};
}

export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	isCurrent: boolean;
	achievements: string[];
}

export interface EducationItem {
	institution: string;
	degree: string;
	startDate: string;
	endDate: string;
	isCurrent: boolean;
}

export type SectionKey =
	| "personalInfo"
	| "summary"
	| "experience"
	| "educations"
	| "skills"
	| "achievements"
	| "additionalExperience";

export interface Achievement {
	title: string;
	description: string;
}

export interface TemplateData {
	sections: {
		personalInfo: PersonalInfo;
		summary: string;
		experience: ExperienceItem[];
		educations: EducationItem[];
		skills: string[];
		achievements: Achievement[];
		additionalExperience: {
			title: string;
			company: string;
			location: string;
			startDate: string;
			endDate: string;
			isCurrent: boolean;
			achievements: string[];
		}[];
	};
}
