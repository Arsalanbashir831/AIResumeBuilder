import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InputField from "@/components/InputField";
import { X } from "lucide-react"; // Import the X icon from Lucide

export default function SkillsStep({
	skills,
	onChange,
}: {
	skills: string[];
	onChange: (skills: string[]) => void;
}) {
	const [newSkill, setNewSkill] = useState("");

	const handleAddSkill = () => {
		if (newSkill.trim()) {
			onChange([...skills, newSkill]);
			setNewSkill("");
		}
	};

	const handleRemoveSkill = (skillToRemove: string) => {
		onChange(skills.filter((skill) => skill !== skillToRemove));
	};

	return (
		<div>
			<h3 className='text-lg font-semibold mb-2'>Skills</h3>
			<div className='flex items-center flex-wrap gap-2 mt-4'>
				<InputField
					label='Add Skill'
					value={newSkill}
					onChange={(value) => setNewSkill(value)}
					placeholder='Enter a new skill'
				/>
				<Button type='button' className='mt-2' onClick={handleAddSkill}>
					Add Skill
				</Button>
			</div>

			{/* Display Skills as Badges */}
			<div className='flex flex-wrap gap-2 mt-4'>
				{skills.map((skill, index) => (
					<div key={index} className='relative'>
						<Badge className='pr-6 pl-2 flex items-center'>
							{skill}
							{/* Positioned X Icon */}
							<Button
								type='button'
								size='icon'
								variant='outline'
								onClick={() => handleRemoveSkill(skill)}
								className='absolute -top-2 -right-1 m-0 rounded-full w-5 h-5 text-gray-500 hover:text-gray-800'>
								<X size={2} />
							</Button>
						</Badge>
					</div>
				))}
			</div>
		</div>
	);
}
