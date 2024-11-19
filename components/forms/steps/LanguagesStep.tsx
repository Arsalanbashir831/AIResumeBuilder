import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrashIcon, PlusCircleIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Language } from "@/types/global";

interface LanguagesProps {
	language: Language[];
	onChange: (language: Language[]) => void;
}

export default function LanguagesStep({ language, onChange }: LanguagesProps) {
	const [newLanguage, setNewLanguage] = useState<Language>({
		name: "",
		level: "",
	});

	const handleAddLanguage = () => {
		if (newLanguage.name && newLanguage.level) {
			onChange([...language, newLanguage]);
			setNewLanguage({ name: "", level: "" });
		}
	};

	const handleRemoveLanguage = (index: number) => {
		onChange(language.filter((_, i) => i !== index));
	};

	return (
		<div className='space-y-6'>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='text-2xl font-semibold'>Languages</h3>
			</div>

			{/* Add New Language Form */}
			<Card>
				<CardContent className='space-y-4'>
					{/* Language Name */}
					<div className='space-y-2'>
						<Label htmlFor='language-name'>Language Name</Label>
						<Input
							id='language-name'
							value={newLanguage.name}
							onChange={(e) =>
								setNewLanguage({ ...newLanguage, name: e.target.value })
							}
							placeholder='e.g., English'
						/>
					</div>

					{/* Proficiency Level */}
					<div className='space-y-2'>
						<Label htmlFor='language-level'>Proficiency Level</Label>
						<Select
							onValueChange={(value) =>
								setNewLanguage({ ...newLanguage, level: value })
							}
							value={newLanguage.level}>
							<SelectTrigger id='language-level'>
								<SelectValue placeholder='Select level' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='Native'>Native Speaker</SelectItem>
								<SelectItem value='Fluent'>Fluent</SelectItem>
								<SelectItem value='Intermediate'>Intermediate</SelectItem>
								<SelectItem value='Beginner'>Beginner</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Add Button */}
					<Button onClick={handleAddLanguage} className='w-full'>
						<PlusCircleIcon className='mr-2' size={18} />
						Add Language
					</Button>
				</CardContent>
			</Card>

			{/* Display List of Languages */}
			<div className='space-y-4'>
				{language.map((lang, index) => (
					<Card key={index}>
						<CardContent className='flex justify-between items-center py-2'>
							<div className='flex items-center space-x-4'>
								<p className='text-sm text-gray-700'>{lang.name}</p>
								<Badge variant='default' className='mb-1'>
									{lang.level}
								</Badge>
							</div>
							<Button
								variant='ghost'
								size='icon'
								className='text-red-500 hover:text-red-700'
								onClick={() => handleRemoveLanguage(index)}>
								<TrashIcon size={18} />
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
