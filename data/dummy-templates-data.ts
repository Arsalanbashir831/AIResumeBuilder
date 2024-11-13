export const DUMMY_TEMPLATES_DATA = [
	{
		id: 1,
		name: "Professional Template",
		sections: {
			personalInfo: {
				profileImage: "/path/to/profile-image.jpg",
				name: "John Doe",
				title: "Software Engineer",
				contact: {
					phone: "123-456-7890",
					email: "john.doe@example.com",
					location: "San Francisco, CA",
					link: "linkedin.com/in/johndoe",
				},
			},
			summary:
				"Full-stack software engineer with 5+ years of experience in building web applications. Proficient in JavaScript, React, Node.js, and TypeScript. Strong background in computer science with a Bachelor's degree from Stanford University.",
			experience: [
				{
					title: "Business Development Director",
					company: "Restore Tech Innovations",
					location: "New York",
					startDate: "10/2012",
					endDate: "12/2014",
					isCurrent: false,
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
					startDate: "01/2015",
					endDate: "12/2018",
					isCurrent: false,
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
					startDate: "06/2011",
					endDate: "08/2011",
					isCurrent: false,
					achievements: [
						"Assisted in developing features for a customer relationship management tool.",
						"Contributed to the integration of third-party APIs to improve app functionality.",
						"Collaborated with senior developers to implement new features and resolve bugs.",
					],
				},
			],
			additionalExperience: [
				{
					title: "Junior Web Developer",
					company: "Web Creations",
					location: "San Francisco, CA",
					startDate: "01/2010",
					endDate: "12/2010",
					isCurrent: false,
					achievements: [
						"Built basic landing pages for client websites using HTML, CSS, and JavaScript.",
						"Collaborated with the design team to ensure seamless website aesthetics and functionality.",
						"Implemented website optimizations that improved loading speed by 20%.",
					],
				},
			],
			educations: [
				{
					institution: "Stanford University",
					degree: "Master of Science in Computer Science",
					location: "Stanford, CA",
					totalGpa: 4.0,
					obtainedGpa: 3.9,
					startDate: "10/2012",
					endDate: "12/2014",
					isCurrent: false,
				},
				{
					institution: "University of California, Berkeley",
					degree: "Bachelor of Arts in Computer Science",
					location: "Berkeley, CA",
					totalGpa: 4.0,
					obtainedGpa: 3.8,
					startDate: "10/2008",
					endDate: "12/2012",
					isCurrent: false,
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
			strengths: [
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
			expertise: [
				{ title: "JavaScript", percent: 90 },
				{ title: "React", percent: 85 },
				{ title: "Node.js", percent: 80 },
				{ title: "TypeScript", percent: 75 },
			],
			certificates: [
				{
					name: "Full-Stack Web Development Certification",
					organization: "Udemy",
				},
				{
					name: "AWS Certified Solutions Architect",
					organization: "Amazon Web Services",
				},
			],
			hobbies: [{ name: "Hiking" }, { name: "Reading" }, { name: "Cooking" }],
		},
	},
	{
		id: 2,
		name: "Creative Template",
		sections: {
			personalInfo: {
				profileImage: "/path/to/profile-image.jpg",
				name: "Jane Smith",
				title: "Graphic Designer",
				contact: {
					phone: "555-123-4567",
					email: "jane.smith@example.com",
					location: "Los Angeles, CA",
					link: "janesmithportfolio.com",
				},
			},
			summary:
				"Creative graphic designer with 6 years of experience specializing in branding, web design, and digital media. Expert in Adobe Creative Suite and UI/UX design. Passionate about creating visually stunning designs that communicate brand stories.",
			experience: [
				{
					title: "Senior Graphic Designer",
					company: "Creative Design Agency",
					location: "Los Angeles, CA",
					startDate: "01/2015",
					endDate: "",
					isCurrent: true,
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
					startDate: "10/2012",
					endDate: "12/2014",
					isCurrent: false,
					achievements: [
						"Redesigned user interfaces for mobile and web applications, improving user satisfaction by 30%.",
						"Conducted user research to identify pain points and improve design.",
						"Collaborated with developers to ensure seamless implementation of designs.",
					],
				},
			],
			additionalExperience: [
				{
					title: "Freelance Graphic Designer",
					company: "Self-Employed",
					location: "Los Angeles, CA",
					startDate: "06/2010",
					endDate: "12/2010",
					isCurrent: false,
					achievements: [
						"Worked on branding projects for local businesses, increasing their visibility by 25%.",
						"Developed custom websites for small businesses to enhance their digital presence.",
						"Collaborated with clients to understand their brand vision and deliver tailored designs.",
					],
				},
			],
			educations: [
				{
					institution: "University of California, Los Angeles (UCLA)",
					degree: "Bachelor of Fine Arts in Graphic Design",
					location: "Los Angeles, CA",
					totalGpa: 4.0,
					obtainedGpa: 3.9,
					startDate: "10/2012",
					endDate: "12/2014",
					isCurrent: false,
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
			strengths: [
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
			expertise: [
				{ title: "Adobe Photoshop", percent: 90 },
				{ title: "Illustrator", percent: 85 },
				{ title: "InDesign", percent: 80 },
				{ title: "UI/UX Design", percent: 75 },
			],
			certificates: [
				{
					name: "UI/UX Design Certification",
					organization: "Interaction Design Foundation",
				},
				{
					name: "Adobe Certified Expert",
					organization: "Adobe",
				},
			],
			hobbies: [
				{ name: "Painting" },
				{ name: "Photography" },
				{ name: "Traveling" },
			],
		},
	},
	{
		id: 3,
		name: "Minimalist Template",
		sections: {
			personalInfo: {
				profileImage: "/path/to/profile-image.jpg",
				name: "Michael Lee",
				title: "Data Scientist",
				contact: {
					phone: "555-789-1234",
					email: "michael.lee@example.com",
					location: "Austin, TX",
					link: "michaelleeportfolio.com",
				},
			},
			summary:
				"Data scientist with expertise in machine learning, data analysis, and big data technologies. Over 5 years of experience working in the tech and finance sectors. Skilled in Python, R, SQL, and cloud technologies like AWS and GCP.",
			experience: [
				{
					title: "Lead Data Scientist",
					company: "Big Data Solutions",
					location: "Austin, TX",
					startDate: "01/2019",
					endDate: "",
					isCurrent: true,
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
					startDate: "10/2012",
					endDate: "12/2014",
					isCurrent: false,
					achievements: [
						"Performed data cleaning and transformation to ensure data integrity for analytics projects.",
						"Developed automated dashboards and reports for tracking key business metrics.",
					],
				},
			],
			additionalExperience: [
				{
					title: "Intern Data Analyst",
					company: "Analytics Hub",
					location: "Austin, TX",
					startDate: "06/2009",
					endDate: "08/2009",
					isCurrent: false,
					achievements: [
						"Assisted in preparing reports on key data points for marketing campaigns.",
						"Performed statistical analysis on customer data to identify trends.",
						"Helped in data collection and preparation for research projects.",
					],
				},
			],
			educations: [
				{
					institution: "Massachusetts Institute of Technology (MIT)",
					degree: "Master of Science in Data Science",
					location: "Cambridge, MA",
					totalGpa: 4.0,
					obtainedGpa: 3.8,
					startDate: "10/2012",
					endDate: "12/2014",
					isCurrent: false,
				},
				{
					institution: "University of California, Berkeley",
					degree: "Bachelor of Science in Computer Science",
					location: "Berkeley, CA",
					totalGpa: 4.0,
					obtainedGpa: 3.9,
					startDate: "10/2008",
					endDate: "12/2012",
					isCurrent: false,
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
			strengths: [
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
			expertise: [
				{ title: "Python", percent: 90 },
				{ title: "R", percent: 85 },
				{ title: "SQL", percent: 80 },
				{ title: "Machine Learning", percent: 75 },
			],
			certificates: [
				{
					name: "Machine Learning Certification",
					organization: "Coursera",
				},
				{
					name: "Data Science Certification",
					organization: "edX",
				},
			],
			hobbies: [{ name: "Running" }, { name: "Reading" }, { name: "Yoga" }],
		},
	},
];
