import React from "react";

interface SummaryProps {
	summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
	return (
		<section className='grid grid-cols-12 gap-6'>
			<aside className='col-span-3 bg-gray-900 text-white px-6'>
				<h2 className='text-yellow-500 font-semibold mb-4 border-t-2 border-gray-400 pt-2 text-right'>
					PROFILE
				</h2>
			</aside>
			<div className='col-span-9 px-2'>
				<p className='text-gray-700 border-t-2 border-gray-400 pt-2'>
					{summary}
				</p>
			</div>
		</section>
	);
};

export default Summary;
