const Education = ({
	educations,
}: {
	educations: {
		degree: string;
		institution: string;
		startDate: string;
		endDate: string;
		isCurrent: boolean;
	}[];
}) => {
	return (
		<div className='mb-4 h-fit'>
			<h2 className='text-lg font-bold border-b-4 border-template mb-4 heading-template'>
				EDUCATION
			</h2>
			{educations?.map((education, index) => (
				<div
					key={index}
					className={`flex flex-col justify-between border-dashed pb-2 mb-3 ${
						index > 1 || index !== educations.length - 1 ? "border-b-2" : ""
					}`}>
					<h3 className='font-bold text-sm'>{education.degree}</h3>
					<h4 className='text-sm heading-template font-semibold'>
						{education.institution}
					</h4>
					<div className='text-sm text-gray-600'>
						<div>
							{education.startDate} -{" "}
							{education.isCurrent ? "Present" : education.endDate}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Education;
