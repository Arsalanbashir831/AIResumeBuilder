import React from "react";
import { Language } from "@/types/global";

interface LanguagesProps {
	languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
	return (
		<section>
			<h2 className='text-lg font-bold border-b-2 border-template mb-2'>
				Languages
			</h2>
			<div className='flex flex-col'>
				{languages?.map((language, index) => (
					<div key={index} className={"space-y-1 mb-3"}>
						<h3 className='font-bold'>{language.name}</h3>
						{language.level && (
							<p className='text-sm text-gray-600'>{language.level}</p>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Languages;
