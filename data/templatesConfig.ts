// data/templatesConfig.ts
import Template1 from "@/components/templates/template-1";
import Template2 from "@/components/templates/template-2";
import Template3 from "@/components/templates/template-3";
import Template4 from "@/components/templates/template-4";
import Template5 from "@/components/templates/template-5";

export const templates = [
	{
		id: "template-1",
		name: "Template 1",
		component: Template1,
		snapshot: "/path/to/template1-snapshot.jpg",
		sections: [
			{
				key: "personalInfo",
				label: "Personal Information",
				fieldsIncluded: {
					profileImage: false,
					name: true,
					title: true,
					email: true,
					phone: true,
					link: true,
					location: false,
				},
			},
			{ key: "summary", label: "Summary" },
			{
				key: "experience",
				label: "Experience",
				fieldsIncluded: {
					title: true,
					company: true,
					location: false,
					startDate: true,
					endDate: true,
					achievements: true,
				},
			},
			{ key: "skills", label: "Skills" },
			{ key: "achievements", label: "Achievements" },
			{
				key: "educations",
				label: "Education",
				fieldsIncluded: {
					institution: true,
					degree: true,
					location: false,
					gpa: false,
					startDate: true,
					endDate: true,
				},
			},
			{ key: "additionalExperience", label: "Additional Experience" },
		],
	},
	{
		id: "template-2",
		name: "Template 2",
		component: Template2,
		snapshot: "/path/to/template2-snapshot.jpg",
		sections: [
			{
				key: "personalInfo",
				label: "Personal Information",
				fieldsIncluded: {
					profileImage: true,
					name: true,
					title: true,
					email: true,
					phone: true,
					link: true,
					location: true,
				},
			},
			{ key: "summary", label: "Summary" },
			{ key: "skills", label: "Skills" },
			{ key: "achievements", label: "Strengths" },
			{
				key: "experience",
				label: "Experience",
				fieldsIncluded: {
					title: true,
					company: true,
					location: false,
					startDate: true,
					endDate: true,
					achievements: true,
				},
			},
			{
				key: "educations",
				label: "Education",
				fieldsIncluded: {
					institution: true,
					degree: true,
					location: false,
					gpa: false,
					startDate: true,
					endDate: true,
				},
			},
		],
	},
	{
		id: "template-3",
		name: "Template 3",
		component: Template3,
		snapshot: "/path/to/template3-snapshot.jpg",
		sections: [
			{
				key: "personalInfo",
				label: "Personal Information",
				fieldsIncluded: {
					profileImage: true,
					name: true,
					title: false,
					email: true,
					phone: true,
					link: true,
					location: false,
				},
			},
			{ key: "summary", label: "Summary" },
			{
				key: "experience",
				label: "Experience",
				fieldsIncluded: {
					title: true,
					company: true,
					location: false,
					startDate: true,
					endDate: true,
					achievements: true,
				},
			},
			{
				key: "educations",
				label: "Education",
				fieldsIncluded: {
					institution: true,
					degree: true,
					location: false,
					gpa: false,
					startDate: true,
					endDate: true,
				},
			},
			{ key: "projects", label: "Projects" },
			{ key: "skills", label: "Skills" },
			{ key: "certificates", label: "Certificates" },
			{ key: "languages", label: "Languages" },
			// { key: "references", label: "References" },
		],
	},
	{
		id: "template-4",
		name: "Template 4",
		component: Template4,
		snapshot: "/path/to/template4-snapshot.jpg",
		sections: [
			{
				key: "personalInfo",
				label: "Personal Information",
				fieldsIncluded: {
					profileImage: false,
					name: true,
					title: true,
					email: true,
					phone: true,
					link: true,
					location: true,
				},
			},
			{ key: "summary", label: "Summary" },
			{
				key: "educations",
				label: "Education",
				fieldsIncluded: {
					institution: true,
					degree: true,
					location: true,
					gpa: true,
					startDate: true,
					endDate: true,
				},
			},
			{
				key: "experience",
				label: "Experience",
				fieldsIncluded: {
					title: true,
					company: true,
					location: false,
					startDate: true,
					endDate: true,
					achievements: true,
				},
			},
			{ key: "achievements", label: "Most Proud Of" },
			{ key: "skills", label: "Skills" },
			{ key: "strengths", label: "Strengths" },
			{ key: "expertise", label: "Expertise" },
		],
	},
	{
		id: "template-5",
		name: "Template 5",
		component: Template5,
		snapshot: "/path/to/template5-snapshot.jpg",
		sections: [
			{
				key: "personalInfo",
				label: "Personal Information",
				fieldsIncluded: {
					profileImage: true,
					name: true,
					title: true,
					email: true,
					phone: true,
					link: true,
					location: true,
				},
			},
			{
				key: "experience",
				label: "Experience",
				fieldsIncluded: {
					title: true,
					company: true,
					location: false,
					startDate: true,
					endDate: true,
					achievements: true,
				},
			},
			{ key: "skills", label: "Tech Stack" },
			{ key: "achievements", label: "Key Achievements" },
			{ key: "certificates", label: "Certificates" },
			{
				key: "educations",
				label: "Education",
				fieldsIncluded: {
					institution: true,
					degree: true,
					location: true,
					gpa: false,
					startDate: true,
					endDate: true,
				},
			},
			{ key: "hobbies", label: "Passions" },
		],
	},
];
