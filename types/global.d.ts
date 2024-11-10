export interface PersonalInfo {
	name: string;
	title: string;
	contact: {
		phone: string;
		email: string;
		location: string;
		website: string;
	};
}

export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	date: string;
	achievements: string[];
}

export interface EducationItem {
	institution: string;
	degree: string;
	date: string;
}

export type SectionKey =
	| "personalInfo"
	| "summary"
	| "experience"
	| "educations"
	| "skills"
	| "achievements";

export interface TemplateData {
	sections: {
		personalInfo: PersonalInfo;
		summary: string;
		experience: ExperienceItem[];
		educations: EducationItem[];
		skills: string[];
		achievements: Achievement[];
	};
}

export interface Achievement {
	title: string;
	description: string;
}
