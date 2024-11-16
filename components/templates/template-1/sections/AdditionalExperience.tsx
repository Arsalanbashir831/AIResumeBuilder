const AdditionalExperience = ({
	additionalExperience,
}: {
	additionalExperience: {
		title: string;
		company: string;
		startDate: string;
		endDate: string;
		isCurrent: boolean;
		location: string;
		achievements: string[];
	}[];
}) => {
	return (
		<div className='mb-8 h-fit'>
			<h2 className='text-lg font-bold border-b-4 border-template mb-4 heading-template'>
				ADDITIONAL EXPERIENCE
			</h2>

			{additionalExperience.map((experience, index) => (
				<div key={index} className='mb-6'>
					<div className='flex flex-col mb-2'>
						<h3 className='font-bold text-md'>{experience.title}</h3>
						<h4 className='text-sm text-gray-600 font-semibold'>
							{experience.company}
						</h4>

						<div className='flex gap-x-4 text-xs'>
							<div>
								{experience.startDate} -{" "}
								{experience.isCurrent ? "Present" : experience.endDate}
							</div>
							<div>📍 {experience.location}</div>
						</div>
					</div>

					<ul className='list-disc list-outside ml-4 text-sm text-gray-700'>
						{experience.achievements.map((achievement, idx) => (
							<li key={idx}>{achievement}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default AdditionalExperience;
