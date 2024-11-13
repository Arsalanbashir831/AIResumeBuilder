import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import InputField from "@/components/InputField";
import AiButton from "@/components/AiButton";
import { Hobby } from "@/types/global";

interface HobbiesProps {
	hobbies: Hobby[];
	onChange: (hobbies: Hobby[]) => void;
}

export default function HobbiesStep({ hobbies, onChange }: HobbiesProps) {
	const [newHobby, setNewHobby] = useState<Hobby>({
		name: "",
	});

	const handleAddHobbies = () => {
		if (newHobby.name) {
			onChange([...hobbies, newHobby]);
			setNewHobby({ name: "" });
		}
	};

	const handleRemoveHobbies = (index: number) => {
		onChange(hobbies.filter((_, i) => i !== index));
	};

	return (
		<div className='p-6 space-y-6'>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='text-lg font-semibold mb-2'>Hobbies</h3>
				<AiButton label='Generate Hobbies' />
			</div>
			<div className='flex items-center flex-wrap gap-2 mt-4'>
				<InputField
					label='Add Hobby'
					value={newHobby.name}
					onChange={(value) => setNewHobby({ name: value as string })}
					placeholder='Enter a new hobby'
				/>
				<Button type='button' className='mt-2' onClick={handleAddHobbies}>
					Add Hobby
				</Button>
			</div>

			{/* Display List of hobbies */}
			<div className='flex flex-wrap gap-2 mt-4'>
				{hobbies.map((hobby, index) => (
					<div key={index} className='relative'>
						<Badge className='pr-6 pl-2 flex items-center'>
							{hobby.name}
							{/* Positioned X Icon */}
							<Button
								type='button'
								size='icon'
								variant='outline'
								onClick={() => handleRemoveHobbies(index)}
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
