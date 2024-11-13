import React from "react";

interface SkillsProps {
	skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
	return (
		<section>
			<h2 className='text-lg text-orange-900 font-bold border-b-2 border-orange-900 mb-2'>
				TECH STACK
			</h2>
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
