import React from "react";
import { ExperienceItem as ExperienceType } from "@/types/global";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
	experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
	return (
		<section className='mb-2'>
			<h2 className='text-lg text-orange-900 font-bold border-b-2 border-orange-900 mb-2'>
				EXPERIENCE
			</h2>
			<div className='space-y-2'>
				{experiences.map((exp, index) => (
					<div
						key={index}
						className={`border-dashed pb-2 last:border-0
						${index > 1 || index !== experiences.length - 1 ? "border-b" : ""}`}>
						<div className='mb-3'>
							<div>
								<h3 className='font-medium text-orange-900'>{exp.title}</h3>
								<p className='text-orange-600 text-sm font-semibold'>
									{exp.company}
								</p>
							</div>
							<div className='flex gap-x-6'>
								<p className='text-gray-600 text-xs flex items-center gap-1'>
									<Calendar className='w-3 h-3 flex-shrink-0' />
									{exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
								</p>
								<p className='text-gray-600 text-xs flex items-center gap-1'>
									<MapPin className='w-3 h-3 flex-shrink-0' />
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
