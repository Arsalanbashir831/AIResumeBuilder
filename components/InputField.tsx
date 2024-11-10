import { Input } from "@/components/ui/input";

interface InputFieldProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
	label,
	value,
	onChange,
	placeholder,
}) => {
	return (
		<div className='mb-4'>
			<label className='block text-sm font-medium'>{label}</label>
			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className='w-full mt-1'
			/>
		</div>
	);
};

export default InputField;
