const Skills = ({ skills }: { skills: string[] }) => {
	return (
		<div className='mb-4 h-fit'>
			<h2 className='text-lg font-bold border-b-4 border-template mb-4 heading-template'>
				SOFTWARE & BUSINESS SKILLS
			</h2>
			<div className='flex flex-wrap gap-2'>
				{skills?.map((skill, index) => (
					<p key={index} className='text-sm border-b-2 px-2'>
						{skill}
					</p>
				))}
			</div>
		</div>
	);
};

export default Skills;
