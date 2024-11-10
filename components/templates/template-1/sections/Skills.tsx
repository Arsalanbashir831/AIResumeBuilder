const Skills = ({ skills }: { skills: string[] }) => {
	return (
		<div className='mb-4'>
			<h2 className='text-lg font-bold border-b-4 border-[#1e2a4a] mb-4 text-[#1e2a4a]'>
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
