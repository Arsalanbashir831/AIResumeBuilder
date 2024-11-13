import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrashIcon, PlusIcon } from "lucide-react";
import EducationField from "@/components/EducationField";
import { EducationItem } from "@/types/global";

interface EducationStepProps {
	educations: EducationItem[];
	onChange: (educations: EducationItem[]) => void;
}

export default function EducationStep({
	educations,
	onChange,
}: EducationStepProps) {
	// Add a new empty education entry to the list
	const handleAddEducation = () => {
		const newEducation: EducationItem = {
			institution: "",
			degree: "",
			location: "",
			startDate: "",
			endDate: "",
			isCurrent: false,
		};
		onChange([...educations, newEducation]);
	};

	// Remove an education entry
	const handleRemoveEducation = (index: number) => {
		onChange(educations.filter((_, i) => i !== index));
	};

	// Handle changes to the education fields
	const handleEducationFieldChange = (
		index: number,
		field: keyof EducationItem,
		value: string | boolean
	) => {
		console.log("field", field);
		const updatedEducations = educations.map((education, i) =>
			i === index ? { ...education, [field]: value } : education
		);
		onChange(updatedEducations);
	};

	// Handle checkbox change for isCurrent
	const handleCheckboxChange = (index: number, checked: boolean) => {
		const updatedEducations = educations.map((education, i) =>
			i === index ? { ...education, isCurrent: checked } : education
		);
		onChange(updatedEducations);
	};

	return (
		<div>
			<div className='flex justify-between items-center mb-3'>
				<h3 className='text-lg font-semibold mb-2'>Education</h3>
				<Button
					type='button'
					size='sm'
					className='mt-4 px-4 py-2 text-white rounded-lg'
					onClick={handleAddEducation}>
					<PlusIcon className='mr-1' />
					Add Education
				</Button>
			</div>

			{/* List of Education Fields */}
			<div className='space-y-4'>
				{educations.map((education, index) => (
					<Card key={index} className='shadow-md p-4'>
						<CardContent>
							<EducationField
								education={education}
								onChange={(field, value) =>
									handleEducationFieldChange(index, field, value)
								}
								handleCheckboxChange={handleCheckboxChange}
								index={index}
							/>
							<Button
								type='button'
								size='sm'
								variant='destructive'
								className='mt-2'
								onClick={() => handleRemoveEducation(index)}>
								<TrashIcon size={16} className='mr-1' />
								Delete
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
