const AdditionalExperience = () => {
	return (
		<div className='mb-8'>
			<h2 className='text-lg font-bold border-b-4 border-[#1e2a4a] mb-4 text-[#1e2a4a]'>
				ADDITIONAL EXPERIENCE
			</h2>
			<div className='mb-6'>
				<div className='flex flex-col mb-2'>
					<h3 className='font-bold text-md'>Marketing and Content Associate</h3>
					<h4 className='text-sm text-gray-600 font-semibold'>Renner-Kub</h4>

					<div className='flex gap-x-4 text-xs'>
						<div>2010 - 2011</div>
						<div>📍 New York</div>
					</div>
				</div>

				<ul className='list-disc list-outside ml-4 text-sm text-gray-700'>
					<li>
						Coordinated, organised and participated in promotional activities
						with developers and sales managers
					</li>
					<li>
						Planned and executed marketing drives and successful share trading
						campaigns in the city
					</li>
					<li>
						Analysed large data sets to identify market trends on Google
						Analytics and prepared presentations showcasing the results
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdditionalExperience;
