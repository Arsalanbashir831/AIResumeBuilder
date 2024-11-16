import React from "react";
import { Hobby } from "@/types/global";

interface HobbiesProps {
	hobbies: Hobby[];
}

const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
	return (
		<section>
			<h2 className='text-lg heading-template font-bold border-b-2 border-template mb-2'>
				Passions
			</h2>
			<div className='flex flex-col'>
				{hobbies.map((hobby, index) => (
					<p
						key={index}
						className={`text-sm heading-template border-dashed pb-1 mb-1 ${
							index > 1 || index !== hobbies.length - 1 ? "border-b" : ""
						}`}>
						{hobby.name}
					</p>
				))}
			</div>
		</section>
	);
};

export default Hobbies;
