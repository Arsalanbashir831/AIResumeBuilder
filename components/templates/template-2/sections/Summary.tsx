import React from "react";

interface SummaryProps {
	summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
	return (
		<div className='mb-8'>
			<h2 className='text-center text-lg font-semibold border-b-2 border-gray-600 pb-1 mb-3'>
				Summary
			</h2>
			<p className='text-gray-700'>{summary}</p>
		</div>
	);
};

export default Summary;
