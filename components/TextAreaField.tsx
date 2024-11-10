import { Textarea } from "@/components/ui/textarea";

interface TextAreaFieldProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
	label,
	value,
	onChange,
}) => {
	return (
		<div className='mb-4'>
			<label className='block text-sm font-medium'>{label}</label>
			<Textarea
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className='w-full mt-1'
				rows={4}
			/>
		</div>
	);
};

export default TextAreaField;
