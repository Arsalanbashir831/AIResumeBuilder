import React from "react";
import { Expertise } from "@/types/global";
import { Progress } from "@/components/ui/progress";

interface IndustryExpertiseProps {
	experties: Expertise[];
}

const IndustryExpertise: React.FC<IndustryExpertiseProps> = ({ experties }) => {
	return (
		<section>
			<h2 className='text-lg font-bold border-b-2 border-black mb-4'>
				Industry Expertise
			</h2>
			<div className='flex flex-col'>
				{experties.map((experty, index) => (
					<div
						key={index}
						className={`space-y-1 border-dashed pb-2 mb-3 ${
							index > 1 || index !== experties.length - 1 ? "border-b" : ""
						}`}>
						<h3 className='font-semibold'>{experty.title}</h3>
						<Progress
							value={experty.percent}
							className='bg-template-300'
							indicatorColor='bg-template'
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default IndustryExpertise;
