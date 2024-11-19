import React from "react";
import { Project } from "@/types/global";

interface ProjectProps {
	projects: Project[];
}

const Strengths: React.FC<ProjectProps> = ({ projects }) => {
	return (
		<section>
			<h2 className='text-lg font-bold border-b-2 border-template mb-2'>
				Projects
			</h2>
			<div className='flex flex-col'>
				{projects?.map((project, index) => (
					<div key={index} className={"space-y-1 mb-5"}>
						<div className='flex flex-col mb-4'>
							<h3 className='font-bold'>{project.title}</h3>
							<p className='text-sm text-gray-600 '>{project.position}</p>
						</div>
						{project.description && (
							<p className='text-sm text-gray-600'>{project.description}</p>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Strengths;
