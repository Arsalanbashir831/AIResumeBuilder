"use client";

import { useState } from "react";

interface EducationData {
	school?: string;
	// Add other fields as needed
}

interface EducationStepProps {
	data: { education: EducationData };
	onNext: (data: { education: EducationData }) => void;
	onBack: () => void;
}

export default function EducationStep({
	data,
	onNext,
	onBack,
}: EducationStepProps) {
	const [educationData, setEducationData] = useState(data.education || {});

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onNext({ education: educationData });
	};

	return (
		<form onSubmit={handleSubmit} className='step-form'>
			<label>School</label>
			<input
				type='text'
				value={educationData.school || ""}
				onChange={(e) =>
					setEducationData({ ...educationData, school: e.target.value })
				}
			/>

			{/* Additional fields for degree, major, etc. */}

			<button type='button' onClick={onBack} className='btn-back'>
				Back
			</button>
			<button type='submit' className='btn-next'>
				Next
			</button>
		</form>
	);
}
