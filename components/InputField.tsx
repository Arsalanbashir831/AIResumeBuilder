import { Input } from "@/components/ui/input";

interface InputFieldProps {
	type?: string;
	label: string;
	value: string;
	onChange: (value: string | File) => void;
	placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
	type = "text",
	label,
	value,
	onChange,
	placeholder,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (type === "file") {
			// Handle file upload by passing the file itself
			const file = e.target.files?.[0];
			if (file) {
				onChange(file); // Pass the file to parent component's handler
			}
		} else {
			// For other types, just pass the value
			onChange(e.target.value);
		}
	};

	return (
		<div className='mb-4'>
			<label className='block text-sm font-medium'>{label}</label>
			<Input
				type={type}
				accept={type === "file" ? "image/*" : undefined}
				{...(type !== "file" && { value })}
				onChange={handleChange}
				placeholder={placeholder}
				className='w-full mt-1'
			/>
		</div>
	);
};

export default InputField;
