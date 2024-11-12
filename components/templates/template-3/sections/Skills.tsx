import { Badge } from "@/components/ui/badge";
import React from "react";

interface SkillsProps {
	skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
	return (
		<section className='grid grid-cols-12 gap-6'>
			<aside className='col-span-3 bg-gray-900 text-white p-6'>
				<h2 className='text-yellow-500 font-semibold mb-4 border-t-2 border-gray-400 pt-2 text-right'>
					SKILLS
				</h2>
			</aside>
			<div className='col-span-9 px-2 mt-6'>
				<div className='flex flex-wrap gap-2 border-t-2 border-gray-400 pt-2'>
					{skills?.map((skill, index) => (
						<Badge key={index} variant='secondary' className='bg-yellow-100'>
							{skill}
						</Badge>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
