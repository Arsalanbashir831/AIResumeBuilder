import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrashIcon, PlusIcon } from "lucide-react";
import ExperienceField from "@/components/ExperienceField";

interface Experience {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	isCurrent: boolean;
	achievements: string[];
}

interface ExperienceStepProps {
	experiences: Experience[];
	onChange: (experiences: Experience[]) => void;
}

export default function ExperienceStep({
	experiences,
	onChange,
}: ExperienceStepProps) {
	// Add a new empty experience entry to the list
	const handleAddExperience = () => {
		const newExperience: Experience = {
			title: "",
			company: "",
			location: "",
			startDate: "",
			endDate: "",
			isCurrent: false,
			achievements: [""],
		};
		onChange([...experiences, newExperience]);
	};

	// Remove an experience entry
	const handleRemoveExperience = (index: number) => {
		onChange(experiences.filter((_, i) => i !== index));
	};

	// Handle changes to the experience fields
	const handleExperienceFieldChange = (
		index: number,
		field: keyof Experience,
		value: string | boolean | string[]
	) => {
		const updatedExperiences = experiences.map((experience, i) =>
			i === index ? { ...experience, [field]: value } : experience
		);
		onChange(updatedExperiences);
	};

	// Handle checkbox change for isCurrent
	const handleCheckboxChange = (index: number, checked: boolean) => {
		const updatedExperiences = experiences.map((experience, i) =>
			i === index ? { ...experience, isCurrent: checked } : experience
		);
		onChange(updatedExperiences);
	};

	return (
		<div>
			<div className='flex justify-between items-center mb-3'>
				<h3 className='text-lg font-semibold mb-2'>Experience</h3>
				<Button
					type='button'
					size='sm'
					className='mt-4 px-4 py-2 text-white rounded-lg'
					onClick={handleAddExperience}>
					<PlusIcon className='mr-1' />
					Add Experience
				</Button>
			</div>

			{/* List of Experience Fields */}
			<div className='space-y-4'>
				{experiences.map((experience, index) => (
					<Card key={index} className='shadow-md p-4'>
						<CardContent>
							<ExperienceField
								experience={experience}
								onChange={(field, value) =>
									handleExperienceFieldChange(index, field, value)
								}
								handleCheckboxChange={handleCheckboxChange}
								index={index}
							/>
							<Button
								type='button'
								size='sm'
								variant='destructive'
								className='mt-2'
								onClick={() => handleRemoveExperience(index)}>
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
