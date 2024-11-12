import React from "react";

interface SkillsProps {
	skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
	return (
		<div className='mb-8'>
			<h2 className='text-center text-lg font-semibold border-b-2 border-gray-600 pb-1 mb-3'>
				Skills
			</h2>
			<p className='text-gray-700 text-sm'>{skills.join(" • ")}</p>
		</div>
	);
};

export default Skills;
