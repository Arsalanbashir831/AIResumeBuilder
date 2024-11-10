const Summary = ({ summary }: { summary: string }) => {
	return (
		<div className='mb-4'>
			<h2 className='text-lg font-bold border-b-4 border-[#1e2a4a] mb-4 text-[#1e2a4a]'>
				SUMMARY
			</h2>
			<p className='text-sm text-gray-700'>{summary}</p>
		</div>
	);
};

export default Summary;
