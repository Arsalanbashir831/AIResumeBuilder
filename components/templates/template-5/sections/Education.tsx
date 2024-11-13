import React from "react";
import { EducationItem as EducationType } from "@/types/global";
import { Calendar, MapPin } from "lucide-react";

interface EducationProps {
	educations: EducationType[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
	return (
		<section className='mb-8'>
			<h2 className='text-lg text-orange-900 font-bold border-b-2 border-orange-900 mb-2'>
				EDUCATION
			</h2>
			<div className='mb-4'>
				{educations.map((edu, index) => (
					<div
						key={index}
						className={`flex justify-between items-start border-dashed pb-2 mb-3 ${
							index > 1 || index !== educations.length - 1 ? "border-b" : ""
						}`}>
						<div>
							<h3 className='text-orange-900'>{edu.degree}</h3>
							<p className='text-orange-600 font-bold'>{edu.institution}</p>
							<div className='flex gap-x-10 mt-2'>
								<p className='text-sm text-gray-600 flex items-center gap-1'>
									<Calendar className='w-4 h-4 flex-shrink-0' />
									{edu.startDate} - {edu.isCurrent ? "Present" : edu.endDate}
								</p>
								<p className='text-sm text-gray-600 flex items-center gap-1'>
									<MapPin className='w-4 h-4 flex-shrink-0' />
									{edu.location}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
