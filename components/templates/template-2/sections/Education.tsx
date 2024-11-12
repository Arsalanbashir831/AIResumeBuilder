import React from "react";
import { EducationItem as EducationType } from "@/types/global";

interface EducationProps {
	educations: EducationType[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
	return (
		<div className='mb-8'>
			<h2 className='text-center text-lg font-semibold border-b-2 border-gray-600 pb-1 mb-3'>
				Education
			</h2>
			<div className='space-y-3'>
				{educations.map((edu, index) => (
					<div key={index} className='flex justify-between'>
						<div>
							<h3 className='font-medium'>{edu.institution}</h3>
							<p className='text-gray-600 text-sm'>{edu.degree}</p>
						</div>
						<div className='text-right'>
							{/* <p className="text-gray-600 text-sm">{edu.location}</p> */}
							<p className='text-gray-600 text-sm'>
								{edu.startDate} - {edu.isCurrent ? "Present" : edu.endDate}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
