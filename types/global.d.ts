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
	| "hobbies"
	| "references"
	| "languages"
	| "projects";

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

export interface Project {
	title: string;
	position?: string;
	description: string;
	startDate?: string;
	endDate?: string;
	isCurrent?: boolean;
}

export interface Reference {
	name: string;
	position: string;
	company: string;
	contact: string;
}

export interface Language {
	name: string;
	level: string;
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
		references?: Reference[];
		languages: Language[];
		projects: Project[];
	};
}

export interface FormState {
	userType: "student" | "experienced";
	yearsOfExperience?: number;
	domain: string;
	jobDescription?: File | string | null;
	educationLevel?: "High School" | "College" | "University";
}

// Define a type for the fields that can be included in a section
type SectionFields = {
	profileImage?: boolean;
	name?: boolean;
	title?: boolean;
	email?: boolean;
	phone?: boolean;
	link?: boolean;
	location?: boolean;
	[key: string]: boolean | undefined;
};

// Define a type for the section configuration
export interface SectionConfig {
	key: string;
	label: string;
	fieldsIncluded?: SectionFields; // Fields are optional in some sections
}

// Define the Template interface
export interface Template {
	id: string;
	name: string;
	component: ReactNode; // The component that represents the template
	snapshot: string; // URL or path to the snapshot image for the template
	sections: SectionConfig[]; // List of sections for the template
}
