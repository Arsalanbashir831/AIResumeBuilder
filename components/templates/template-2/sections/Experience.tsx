import React from "react";
import { ExperienceItem as ExperienceType } from "@/types/global";

interface ExperienceProps {
	experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
	return (
		<div className='mb-8'>
			<h2 className='text-center text-lg font-semibold border-b-2 border-gray-600 pb-1 mb-3'>
				Experience
			</h2>
			<div className='space-y-6'>
				{experiences.map((exp, index) => (
					<div key={index} className='mb-4'>
						<div className='flex justify-between mb-1'>
							<div>
								<h3 className='font-medium'>{exp.company}</h3>
								<p className='text-gray-600 text-sm'>{exp.title}</p>
							</div>
							<div className='text-right'>
								<p className='text-gray-600 text-sm'>{exp.location}</p>
								<p className='text-gray-600 text-sm'>
									{exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
								</p>
							</div>
						</div>
						<ul className='list-disc list-inside text-gray-700 text-sm space-y-1'>
							{exp.achievements.map((achievement, idx) => (
								<li key={idx}>{achievement}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
