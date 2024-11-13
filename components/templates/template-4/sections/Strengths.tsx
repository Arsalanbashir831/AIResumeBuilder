import React from "react";
import { Achievement } from "@/types/global";

interface StrengthsProps {
	heading: string;
	achievements: Achievement[];
}

const Strengths: React.FC<StrengthsProps> = ({ heading, achievements }) => {
	return (
		<div className='mb-8'>
			<h2 className='text-lg font-bold border-b-2 border-black mb-4'>
				{heading}
			</h2>
			<div className='flex flex-col'>
				{achievements.map((achievement, index) => (
					<div
						key={index}
						className={`space-y-1 border-dashed pb-2 mb-3 ${
							index > 1 || index !== achievements.length - 1 ? "border-b" : ""
						}`}>
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
