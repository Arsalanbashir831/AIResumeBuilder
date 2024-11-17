import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useFormContext } from "@/context/FormContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { FormState } from "@/types/global";

const IntroductoryStep: React.FC = () => {
	const { setFormData } = useFormContext();

	// React Hook Form hook with default values
	const { control, handleSubmit, watch } = useForm({
		defaultValues: {
			userType: "student" as "student" | "experienced",
			yearsOfExperience: 0,
			domain: "",
			jobDescription: null,
			educationLevel: "High School" as "High School" | "College" | "University",
		},
	});

	const watchUserType = watch("userType");

	const onSubmit = (data: FormState) => {
		// Prevent undefined values by merging only non-undefined data
		setFormData((prevData) => ({
			...prevData,
			...Object.fromEntries(
				Object.entries(data).filter(([, value]) => value !== undefined)
			),
		}));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
			<h3 className='text-lg font-semibold text-gray-900'>
				Let&lsquo;s get started with some basic information
			</h3>

			{/* User Type Selector */}
			<div className='space-y-2'>
				<Label
					htmlFor='userType'
					className='block text-sm font-medium text-gray-700'>
					Type
				</Label>
				<Controller
					control={control}
					name='userType'
					render={({ field }) => (
						<Select {...field} onValueChange={field.onChange}>
							<SelectTrigger>
								<span>
									{field.value.charAt(0).toUpperCase() + field.value.slice(1)}
								</span>
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='student'>Student</SelectItem>
								<SelectItem value='experienced'>Experienced</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>
			</div>

			{/* Education Level Selector for Students */}
			{watchUserType === "student" && (
				<div className='space-y-2'>
					<Label
						htmlFor='educationLevel'
						className='block text-sm font-medium text-gray-700'>
						Level of Education
					</Label>
					<Controller
						control={control}
						name='educationLevel'
						render={({ field }) => (
							<Select {...field} onValueChange={field.onChange}>
								<SelectTrigger>
									<span>
										{field.value.charAt(0).toUpperCase() + field.value.slice(1)}
									</span>
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='High School'>High School</SelectItem>
									<SelectItem value='College'>College</SelectItem>
									<SelectItem value='University'>University</SelectItem>
								</SelectContent>
							</Select>
						)}
					/>
				</div>
			)}

			{/* Years of Experience */}
			{watchUserType === "experienced" && (
				<div className='space-y-2'>
					<Label
						htmlFor='yearsOfExperience'
						className='block text-sm font-medium text-gray-700'>
						Years of Experience
					</Label>
					<Controller
						control={control}
						name='yearsOfExperience'
						render={({ field }) => (
							<Input
								{...field}
								type='number'
								className='w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							/>
						)}
					/>
				</div>
			)}

			{/* Domain */}
			<div className='space-y-2'>
				<Label
					htmlFor='domain'
					className='block text-sm font-medium text-gray-700'>
					Domain
				</Label>
				<Controller
					control={control}
					name='domain'
					render={({ field }) => (
						<Input
							{...field}
							type='text'
							placeholder='e.g. Software Development, Marketing, etc.'
							className='w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						/>
					)}
				/>
			</div>

			{/* Job Description (File Input) */}
			<div className='space-y-2'>
				<Label
					htmlFor='jobDescription'
					className='block text-sm font-medium text-gray-700'>
					Job Description (Optional)
				</Label>
				<Controller
					control={control}
					name='jobDescription'
					render={({ field }) => (
						<Input
							{...field}
							value={field.value || ""} // Ensure value is not undefined
							type='file'
							className='w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						/>
					)}
				/>
			</div>
		</form>
	);
};

export default IntroductoryStep;
