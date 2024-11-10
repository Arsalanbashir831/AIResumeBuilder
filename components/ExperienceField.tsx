import { Input } from "@/components/ui/input";

interface ExperienceFieldProps {
	experience: { title: string; company: string; date: string };
	onChange: (field: string, value: string, index: number) => void;
	index: number;
}

const ExperienceField: React.FC<ExperienceFieldProps> = ({
	experience,
	onChange,
	index,
}) => {
	return (
		<div className='mb-4'>
			<label className='block text-sm font-medium'>Job Title</label>
			<Input
				value={experience.title}
				onChange={(e) => onChange("title", e.target.value, index)}
				className='w-full mt-1'
			/>
			<label className='block text-sm font-medium mt-4'>Company</label>
			<Input
				value={experience.company}
				onChange={(e) => onChange("company", e.target.value, index)}
				className='w-full mt-1'
			/>
			<label className='block text-sm font-medium mt-4'>Date</label>
			<Input
				value={experience.date}
				onChange={(e) => onChange("date", e.target.value, index)}
				className='w-full mt-1'
			/>
		</div>
	);
};

export default ExperienceField;
