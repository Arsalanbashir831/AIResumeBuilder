const Achievements = ({
	achievements,
}: {
	achievements: { title: string; description: string }[];
}) => {
	return (
		<div className='mb-4'>
			<h2 className='text-lg font-bold border-b-4 border-[#1e2a4a] mb-4 text-[#1e2a4a]'>
				ACHIEVEMENTS
			</h2>
			<div className='space-y-4'>
				{achievements?.map((achievement, index) => (
					<div
						key={index}
						className={`flex gap-2 border-dashed pb-2 ${
							index > 1 || index !== achievements.length - 1 ? "border-b-2" : ""
						}`}>
						<span className='text-blue-600'>🏆</span>
						<div>
							<h3 className='font-bold text-sm'>{achievement.title}</h3>
							<p className='text-sm'>{achievement.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Achievements;
