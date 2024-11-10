"use client";

import { useState } from "react";

interface PersonalInfoStepProps {
	data: { personalInfo: { name?: string } };
	onNext: (data: { personalInfo: { name?: string } }) => void;
	isFirstStep: boolean;
}

export default function PersonalInfoStep({
	data,
	onNext,
	isFirstStep,
}: PersonalInfoStepProps) {
	const [personalData, setPersonalData] = useState(data.personalInfo || {});

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onNext({ personalInfo: personalData });
	};

	return (
		<form onSubmit={handleSubmit} className='step-form'>
			<label>Name</label>
			<input
				type='text'
				value={personalData.name || ""}
				onChange={(e) =>
					setPersonalData({ ...personalData, name: e.target.value })
				}
			/>

			{/* Additional fields like email, phone, etc. */}

			<button type='submit' className='btn-next'>
				Next
			</button>
		</form>
	);
}
