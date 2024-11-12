import React from "react";
import { ExperienceItem as ExperienceType } from "@/types/global";

interface ExperienceProps {
	experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
	return (
		<section className='grid grid-cols-12 gap-6'>
			<aside className='col-span-3 bg-gray-900 text-white p-6'>
				<h2 className='text-yellow-500 font-semibold mb-4 border-t-2 border-gray-400 pt-2 text-right'>
					WORK EXPERIENCE
				</h2>
			</aside>
			<div className='col-span-9 px-2 mt-6'>
				<div className='space-y-6 border-t-2 border-gray-400 pt-2'>
					{experiences?.map((experience, index) => (
						<article key={index}>
							<div className='flex justify-between items-start mb-2 '>
								<h3 className='font-semibold text-lg'>{experience.title}</h3>
								<div className='flex items-center text-gray-600'>
									<time className='mr-2'>
										{experience.startDate} -{" "}
										{experience.isCurrent ? "Present" : experience.endDate}
									</time>
								</div>
							</div>
							<h4 className='text-gray-600 mb-2'>{experience.company}</h4>
							<ul className='list-disc list-inside text-gray-700 space-y-2'>
								{experience.achievements.map((achievement, idx) => (
									<li key={idx}>{achievement}</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
