export const DUMMY_TEMPLATES_DATA = [
	{
		id: 1,
		name: "Professional Template",
		sections: {
			personalInfo: {
				name: "John Doe",
				title: "Software Engineer",
				contact: {
					phone: "123-456-7890",
					email: "john.doe@example.com",
					location: "San Francisco, CA",
					website: "linkedin.com/in/johndoe",
				},
			},
			summary:
				"Full-stack software engineer with 5+ years of experience in building web applications. Proficient in JavaScript, React, Node.js, and TypeScript. Strong background in computer science with a Bachelor's degree from Stanford University.",
			experience: [
				{
					title: "Business Development Director",
					company: "Restore Tech Innovations",
					location: "New York",
					date: "2014 - 2018",
					achievements: [
						"Increased sales by 15% between 2019 and 2020 following a targeted activation campaign.",
						"Tracked down old prospects and gained $2M in new business over six months.",
						"Developed strategic partnerships with 3 top local retail companies.",
					],
				},
				{
					title: "Senior Software Engineer",
					company: "Tech Innovators",
					location: "San Francisco, CA",
					date: "2018 - 2021",
					achievements: [
						"Led a team of engineers to develop a new SaaS platform used by 10,000+ users.",
						"Optimized back-end code, reducing processing time by 25%.",
						"Implemented security features that improved system integrity and reduced vulnerabilities.",
					],
				},
				{
					title: "Software Engineer Intern",
					company: "DevStart LLC",
					location: "Remote",
					date: "2012 - 2014",
					achievements: [
						"Assisted in developing features for a customer relationship management tool.",
						"Contributed to the integration of third-party APIs to improve app functionality.",
						"Collaborated with senior developers to implement new features and resolve bugs.",
					],
				},
			],
			educations: [
				{
					institution: "Stanford University",
					degree: "Master of Science in Computer Science",
					date: "2012 - 2014",
				},
				{
					institution: "University of California, Berkeley",
					degree: "Bachelor of Arts in Computer Science",
					date: "2008 - 2012",
				},
			],
			skills: ["JavaScript", "React", "Node.js", "TypeScript"],
			achievements: [
				{
					title: "Leadership Award",
					description:
						"Developed a new feature that increased user engagement by 30%",
				},
				{
					title: "Sales Award",
					description: "Achieved 150% of the sales target in 2020",
				},
			],
		},
	},
	{
		id: 2,
		name: "Creative Template",
		sections: {
			personalInfo: {
				name: "Jane Smith",
				title: "Graphic Designer",
				contact: {
					phone: "555-123-4567",
					email: "jane.smith@example.com",
					location: "Los Angeles, CA",
					website: "janesmithportfolio.com",
				},
			},
			summary:
				"Creative graphic designer with 6 years of experience specializing in branding, web design, and digital media. Expert in Adobe Creative Suite and UI/UX design. Passionate about creating visually stunning designs that communicate brand stories.",
			experience: [
				{
					title: "Senior Graphic Designer",
					company: "Creative Design Agency",
					location: "Los Angeles, CA",
					date: "2016 - Present",
					achievements: [
						"Led design projects for top clients, improving brand presence by 40%",
						"Designed digital campaigns that led to a 25% increase in customer engagement",
						"Collaborated with marketing teams to create content for social media platforms.",
					],
				},
				{
					title: "UI/UX Designer",
					company: "Web Wizards",
					location: "Los Angeles, CA",
					date: "2014 - 2016",
					achievements: [
						"Redesigned user interfaces for mobile and web applications, improving user satisfaction by 30%.",
						"Conducted user research to identify pain points and improve design.",
						"Collaborated with developers to ensure seamless implementation of designs.",
					],
				},
				{
					title: "Junior Graphic Designer",
					company: "Artworks Ltd.",
					location: "Los Angeles, CA",
					date: "2012 - 2014",
					achievements: [
						"Assisted senior designers in the creation of client branding materials",
						"Created mockups and prototypes for client websites and mobile applications",
						"Helped improve the design quality and output of the team, reducing revisions by 20%",
					],
				},
			],
			educations: [
				{
					institution: "University of California, Los Angeles (UCLA)",
					degree: "Bachelor of Fine Arts in Graphic Design",
					date: "2009 - 2013",
				},
			],
			skills: ["Adobe Photoshop", "Illustrator", "InDesign", "UI/UX Design"],
			achievements: [
				{
					title: "Creative Excellence Award",
					description:
						"Awarded for exceptional creativity in rebranding a major client.",
				},
				{
					title: "Top Design Portfolio",
					description:
						"Recognized for having one of the best design portfolios in the industry.",
				},
			],
		},
	},
	{
		id: 3,
		name: "Minimalist Template",
		sections: {
			personalInfo: {
				name: "Michael Lee",
				title: "Data Scientist",
				contact: {
					phone: "555-789-1234",
					email: "michael.lee@example.com",
					location: "Austin, TX",
					website: "michaelleeportfolio.com",
				},
			},
			summary:
				"Data scientist with expertise in machine learning, data analysis, and big data technologies. Over 5 years of experience working in the tech and finance sectors. Skilled in Python, R, SQL, and cloud technologies like AWS and GCP.",
			experience: [
				{
					title: "Lead Data Scientist",
					company: "Big Data Solutions",
					location: "Austin, TX",
					date: "2018 - Present",
					achievements: [
						"Built machine learning models for predicting customer behavior, resulting in a 20% increase in retention.",
						"Developed data pipelines for real-time analytics, improving data processing efficiency by 40%.",
						"Collaborated with cross-functional teams to integrate machine learning models into production systems.",
					],
				},
				{
					title: "Data Analyst",
					company: "Tech Innovations",
					location: "San Francisco, CA",
					date: "2015 - 2018",
					achievements: [
						"Performed data cleaning and transformation to ensure data integrity for analytics projects.",
						"Developed automated dashboards and reports for tracking key business metrics.",
					],
				},
				{
					title: "Junior Data Scientist",
					company: "DataLab Inc.",
					location: "Austin, TX",
					date: "2013 - 2015",
					achievements: [
						"Developed predictive models to forecast product sales based on historical data.",
						"Created data visualizations and reports for executives to aid in decision-making.",
						"Collaborated with engineers to optimize database queries and improve data retrieval speed.",
					],
				},
			],
			educations: [
				{
					institution: "Massachusetts Institute of Technology (MIT)",
					degree: "Master of Science in Data Science",
					date: "2013 - 2015",
				},
				{
					institution: "University of California, Berkeley",
					degree: "Bachelor of Science in Computer Science",
					date: "2009 - 2013",
				},
			],
			skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization"],
			achievements: [
				{
					title: "Innovation Award",
					description:
						"Developed a predictive model that improved customer retention by 15%.",
				},
				{
					title: "Top Performer Award",
					description:
						"Recognized as the top performer in the data science team for two consecutive years.",
				},
			],
		},
	},
];
