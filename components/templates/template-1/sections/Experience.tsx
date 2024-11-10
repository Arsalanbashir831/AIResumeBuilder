const Experience = ({
	experiences,
}: {
	experiences: {
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
		<div className='mb-4'>
			<h2 className='text-lg font-bold border-b-4 border-[#1e2a4a] mb-4 text-[#1e2a4a]'>
				EXPERIENCE
			</h2>

			{experiences.map((exp, index) => (
				<div
					key={index}
					className={`mb-6 border-dashed pb-4 
						${index > 1 || index !== experiences.length - 1 ? "border-b-2" : ""}`}>
					<div className='flex flex-col mb-2'>
						<h3 className='font-bold text-md'>{exp.title}</h3>
						<h4 className='text-sm text-gray-600 font-semibold'>
							{exp.company}
						</h4>

						<div className='flex gap-x-4 text-xs'>
							<div>
								{exp.startDate} - {exp.isCurrent ? "Present" : exp.endDate}
							</div>
							<div>📍 {exp.location}</div>
						</div>
					</div>
					<ul className='list-disc list-outside ml-4 text-sm text-gray-700'>
						{exp.achievements.map((achievement, i) => (
							<li key={i}>{achievement}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Experience;
