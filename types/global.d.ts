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

export interface Resume {
  id: string; // Replace with actual key names from your API response
  picture:string,
  data: {
	templateId:string,
	name: string,

    sections: {
      personalInfo: { title: string };
    };
  };
}
export interface FormState {
  userType: "student" | "experienced";
  yearsOfExperience?: number;
  domain: string;
  jobDescription?: string;
  educationLevel?: "High School" | "College" | "University";
}

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

export interface SectionConfig {
  key: string;
  label: string;
  fieldsIncluded?: SectionFields; 
}

export interface Template {
  id: string;
  name: string;
  component: ReactNode; 
  snapshot: string; 
  sections: SectionConfig[]; 
}


export type Plan = {
  id: number;
  name: string;
  price: string;
  credits: number;
  is_addon: boolean;
};