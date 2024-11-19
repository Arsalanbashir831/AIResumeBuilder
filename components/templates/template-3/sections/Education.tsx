import React from "react";
import { EducationItem as EducationType } from "@/types/global";
import { formatDate } from "@/lib/utils";

interface EducationProps {
	educations: EducationType[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
	return (
		<section className='mb-4'>
			<h2 className='text-lg font-bold border-b-2 border-template mb-2'>
				EDUCATION
			</h2>
			<div className='mb-4'>
				{educations.map((edu, index) => (
					<div key={index} className={"mb-5"}>
						<div className='flex items-center justify-between'>
							<h3 className='font-semibold text-sm'>{edu.institution}</h3>
							<p className='text-sm flex items-center gap-1 font-semibold'>
								{formatDate(edu.startDate)} to{" "}
								{edu.isCurrent ? "Present" : formatDate(edu.endDate)}
							</p>
						</div>
						<div className='flex items-center justify-between'>
							<p className='text-sm text-gray-600 flex items-center gap-1'>
								{edu.location}
							</p>
							<p className='text-gray-600 text-sm'>{edu.degree}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
