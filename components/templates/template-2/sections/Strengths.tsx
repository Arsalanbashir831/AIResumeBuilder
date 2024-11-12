import React from "react";
import { Achievement } from "@/types/global";

interface StrengthsProps {
	achievements: Achievement[];
}

const Strengths: React.FC<StrengthsProps> = ({ achievements }) => {
	return (
		<div className='mb-8'>
			<h2 className='text-center text-lg font-semibold border-b-2 border-gray-600 pb-1 mb-3'>
				Strengths
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{achievements.map((achievement, index) => (
					<div key={index} className='space-y-1'>
						<h3 className='font-medium'>{achievement.title}</h3>
						{achievement.description && (
							<p className='text-sm text-gray-600'>{achievement.description}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Strengths;
