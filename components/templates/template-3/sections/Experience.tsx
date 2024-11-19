import React from "react";
import { ExperienceItem as ExperienceType } from "@/types/global";
import { formatDate } from "@/lib/utils";

interface ExperienceProps {
	experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
	return (
		<section className='mb-4'>
			<h2 className='text-lg font-bold border-b-2 border-template mb-4'>
				EXPERIENCE
			</h2>
			<div className='space-y-6'>
				{experiences.map((exp, index) => (
					<div key={index} className='mb-4'>
						<div className='mb-3'>
							<div className='flex items-center justify-between'>
								<h3 className='font-semibold'>{exp.company}</h3>
								<p className='flex items-center gap-1 font-semibold'>
									{formatDate(exp.startDate)} to{" "}
									{exp.isCurrent ? "Present" : formatDate(exp.endDate)}
								</p>
							</div>
							<div className='flex items-center justify-between'>
								<p className='text-gray-600 text-sm '>{exp.title}</p>

								<p className='text-gray-600 text-sm flex items-center gap-1'>
									{exp.location}
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
		</section>
	);
};

export default Experience;
