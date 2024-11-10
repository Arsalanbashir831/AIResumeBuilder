import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrashIcon, PlusCircleIcon } from "lucide-react";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";

interface Achievement {
	title: string;
	description: string;
}

interface AchievementsProps {
	achievements: Achievement[];
	onChange: (achievements: Achievement[]) => void;
}

export default function AchievementsStep({
	achievements,
	onChange,
}: AchievementsProps) {
	const [newAchievement, setNewAchievement] = useState<Achievement>({
		title: "",
		description: "",
	});

	const handleAddAchievement = () => {
		if (newAchievement.title && newAchievement.description) {
			onChange([...achievements, newAchievement]);
			setNewAchievement({ title: "", description: "" });
		}
	};

	const handleRemoveAchievement = (index: number) => {
		onChange(achievements.filter((_, i) => i !== index));
	};

	return (
		<div className='p-6 space-y-6'>
			<h3 className='text-2xl font-semibold mb-4 text-gray-700'>
				Achievements
			</h3>

			{/* Add New Achievement Form */}
			<Card className='shadow-md'>
				<CardContent className='p-6'>
					<div className='mb-4'>
						<InputField
							label='Achievement Title'
							value={newAchievement.title}
							onChange={(value) =>
								setNewAchievement({ ...newAchievement, title: value })
							}
							placeholder='e.g., Creative Excellence Award'
						/>
					</div>
					<div className='mb-4'>
						<TextAreaField
							label='Description'
							value={newAchievement.description}
							onChange={(value) =>
								setNewAchievement({
									...newAchievement,
									description: value,
								})
							}
							placeholder='Describe the achievement'
						/>
					</div>
					<Button
						onClick={handleAddAchievement}
						className='w-full text-white flex items-center justify-center'>
						<PlusCircleIcon className='mr-2' size={18} />
						Add Achievement
					</Button>
				</CardContent>
			</Card>

			{/* Display List of Achievements */}
			<div className='space-y-4'>
				{achievements.map((achievement, index) => (
					<Card key={index} className='shadow-md'>
						<CardContent className='p-6 flex justify-between items-start'>
							<div className='flex-grow'>
								<Badge variant='outline' className='text-primary mb-2'>
									{achievement.title}
								</Badge>
								<p className='text-gray-700'>{achievement.description}</p>
							</div>
							<Button
								variant='ghost'
								className='text-red-500 hover:text-red-700 ml-4'
								onClick={() => handleRemoveAchievement(index)}>
								<TrashIcon size={18} />
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
