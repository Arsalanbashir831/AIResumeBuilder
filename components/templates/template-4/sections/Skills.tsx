import React from "react";

interface SkillsProps {
	skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
	return (
		<section className='mb-8'>
			<h2 className='text-lg font-bold border-b-2 border-black mb-4'>SKILLS</h2>
			<div className='flex flex-wrap gap-2'>
				{skills?.map((skill, index) => (
					<p key={index} className='text-sm border-b border-black px-2'>
						{skill}
					</p>
				))}
			</div>
		</section>
	);
};

export default Skills;
