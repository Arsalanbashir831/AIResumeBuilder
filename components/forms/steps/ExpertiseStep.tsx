import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrashIcon, PlusCircleIcon } from "lucide-react";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import AiButton from "@/components/AiButton";
import { Expertise } from "@/types/global";
import { Progress } from "@/components/ui/progress";

interface ExptertiseProps {
	expertise: Expertise[];
	onChange: (expertise: Expertise[]) => void;
}

export default function ExpertiseStep({
	expertise,
	onChange,
}: ExptertiseProps) {
	const [newExperty, setNewExperty] = useState<Expertise>({
		title: "",
		percent: 0,
	});

	const handleAddExperty = () => {
		if (newExperty.title && newExperty.percent) {
			onChange([...expertise, newExperty]);
			setNewExperty({ title: "", percent: 0 });
		}
	};

	const handleRemoveExperty = (index: number) => {
		onChange(expertise.filter((_, i) => i !== index));
	};

	return (
		<div className='p-6 space-y-6'>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='text-2xl font-semibold mb-4 text-gray-700'>Expertise</h3>
				<AiButton />
			</div>

			{/* Add New Achievement Form */}
			<Card className='shadow-md'>
				<CardContent className='p-6'>
					<div className='mb-4'>
						<InputField
							label='Experty Title'
							value={newExperty.title}
							onChange={(value) =>
								setNewExperty({ ...newExperty, title: value as string })
							}
							placeholder='e.g., Web Development'
						/>
					</div>
					<div className='mb-4'>
						<InputField
							type='number'
							label='Percent'
							value={newExperty.percent}
							onChange={(value) =>
								setNewExperty({ ...newExperty, percent: value as number })
							}
							placeholder='e.g., 100%'
						/>
					</div>
					<Button
						onClick={handleAddExperty}
						className='w-full text-white flex items-center justify-center'>
						<PlusCircleIcon className='mr-2' size={18} />
						Add Experty
					</Button>
				</CardContent>
			</Card>

			{/* Display List of expertise */}
			<div className='space-y-4'>
				{expertise.map((achievement, index) => (
					<Card key={index} className='shadow-md'>
						<CardContent className='p-6 flex justify-between items-start'>
							<div className='flex-grow'>
								<Badge variant='outline' className='text-primary mb-2'>
									{achievement.title}
								</Badge>
								<Progress value={achievement.percent} />
							</div>
							<Button
								variant='ghost'
								className='text-red-500 hover:text-red-700 ml-4'
								onClick={() => handleRemoveExperty(index)}>
								<TrashIcon size={18} />
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
