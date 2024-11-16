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
	location?: string;
	totalGpa?: number;
	obtainedGpa?: number;
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
	| "strengths"
	| "additionalExperience"
	| "expertise"
	| "certificates"
	| "hobbies";

export interface Achievement {
	title: string;
	description: string;
}

export interface Certificate {
	name: string;
	organization: string;
}

export interface Expertise {
	title: string;
	percent: number;
}

export interface Hobby {
	name: string;
}

export interface TemplateData {
	sections: {
		personalInfo: PersonalInfo;
		summary: string;
		experience: ExperienceItem[];
		educations: EducationItem[];
		skills: string[];
		achievements: Achievement[];
		strengths: Achievement[];
		certificates: Certificate[];
		additionalExperience: {
			title: string;
			company: string;
			location: string;
			startDate: string;
			endDate: string;
			isCurrent: boolean;
			achievements: string[];
		}[];
		expertise: Expertise[];
		hobbies: Hobby[];
	};
}

export interface FormState {
	userType: "student" | "experienced";
	yearsOfExperience?: number;
	domain: string;
	jobDescription?: File | string | null;
	educationLevel?: "High School" | "College" | "University";
}
