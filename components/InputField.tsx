import { Input } from "@/components/ui/input";

interface InputFieldProps {
	label: string;
	value: string;
	onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
	return (
		<div className='mb-4'>
			<label className='block text-sm font-medium'>{label}</label>
			<Input
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className='w-full mt-1'
			/>
		</div>
	);
};

export default InputField;
