import React from "react";
import { EducationItem as EducationType } from "@/types/global";
import { Calendar, MapPin } from "lucide-react";

interface EducationProps {
	educations: EducationType[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
	return (
		<section className='mb-8'>
			<h2 className='text-lg font-bold border-b-2 border-black mb-4'>
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
							<h3>{edu.degree}</h3>
							<p className='text-emerald-600 font-bold'>{edu.institution}</p>
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
						<div className='text-right flex flex-col justify-center items-center border-l border-gray-400 p-3'>
							<p className='text-sm text-gray-600 mb-2'>GPA</p>
							<p className='text-sm text-gray-600 font-semibold'>
								<span className='text-emerald-600'>{edu.obtainedGpa}</span> /{" "}
								{edu.totalGpa}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
