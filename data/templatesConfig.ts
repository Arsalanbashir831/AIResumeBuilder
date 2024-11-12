// data/templatesConfig.ts
import Template1 from "@/components/templates/template-1/template-1";
import Template2 from "@/components/templates/template-2/template-2";
import Template3 from "@/components/templates/template-3/template-3";

export const templates = [
	{
		id: 1,
		name: "Template 1",
		component: Template1,
		snapshot: "/path/to/template1-snapshot.jpg",
	},
	{
		id: 2,
		name: "Template 2",
		component: Template2,
		snapshot: "/path/to/template2-snapshot.jpg",
	},
	{
		id: 3,
		name: "Template 3",
		component: Template3,
		snapshot: "/path/to/template3-snapshot.jpg",
	},
];
