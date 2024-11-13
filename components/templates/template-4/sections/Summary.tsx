import React from "react";

interface SummaryProps {
	summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
	return (
		<section className='mb-8'>
			<h2 className='text-lg font-bold border-b-2 border-black mb-4'>
				SUMMARY
			</h2>
			<p className='text-gray-700 text-sm'>{summary}</p>
		</section>
	);
};

export default Summary;
