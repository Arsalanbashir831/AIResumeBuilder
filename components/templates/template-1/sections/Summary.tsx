const Summary = ({ summary }: { summary: string }) => {
	return (
		<div className='mb-4 h-fit'>
			<h2 className='text-lg font-bold border-b-4 border-template mb-4 heading-template'>
				SUMMARY
			</h2>
			<p className='text-sm text-gray-700'>{summary}</p>
		</div>
	);
};

export default Summary;
