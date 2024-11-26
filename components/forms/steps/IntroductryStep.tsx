import React from "react";
import { useFormContext } from "@/context/FormContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";

const IntroductoryStep: React.FC = () => {
	const { formData, setFormData } = useFormContext();

	const handleChange = (key: keyof typeof formData, value: any) => {
		setFormData((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	return (
		<div className="space-y-6">
			<h3 className="text-lg font-semibold text-gray-900">
				Let&lsquo;s get started with some basic information
			</h3>

			{/* User Type Selector */}
			<div className="space-y-2">
				<Label
					htmlFor="userType"
					className="block text-sm font-medium text-gray-700"
				>
					Type
				</Label>
				<Select
					value={formData.userType}
					onValueChange={(value) => handleChange("userType", value)}
				>
					<SelectTrigger>
						<span>
							{formData.userType.charAt(0).toUpperCase() +
								formData.userType.slice(1)}
						</span>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="student">Student</SelectItem>
						<SelectItem value="experienced">Experienced</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Education Level Selector for Students */}
			{formData.userType === "student" && (
				<div className="space-y-2">
					<Label
						htmlFor="educationLevel"
						className="block text-sm font-medium text-gray-700"
					>
						Level of Education
					</Label>
					<Select
						value={formData.educationLevel}
						onValueChange={(value) => handleChange("educationLevel", value)}
					>
						<SelectTrigger>
							<span>
								{formData?.educationLevel
									? formData.educationLevel.charAt(0).toUpperCase() + formData.educationLevel.slice(1)
									: "Select an option"}
							</span>
						</SelectTrigger>

						<SelectContent>
							<SelectItem value="High School">High School</SelectItem>
							<SelectItem value="College">College</SelectItem>
							<SelectItem value="University">University</SelectItem>
						</SelectContent>
					</Select>
				</div>
			)}

			{formData.userType === "experienced" && (
				<div className="space-y-2">
					<Label
						htmlFor="yearsOfExperience"
						className="block text-sm font-medium text-gray-700"
					>
						Years of Experience
					</Label>
					<Input
						type="number"
						value={formData.yearsOfExperience}
						onChange={(e) =>
							handleChange("yearsOfExperience", parseInt(e.target.value) || 0)
						}
						className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
			)}

			{/* Domain */}
			<div className="space-y-2">
				<Label
					htmlFor="domain"
					className="block text-sm font-medium text-gray-700"
				>
					Domain
				</Label>
				<Input
					type="text"
					value={formData.domain}
					onChange={(e) => handleChange("domain", e.target.value)}
					placeholder="e.g. Software Development, Marketing, etc."
					className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>

			{/* Job Description (Textarea) */}
			<div className="space-y-2">
				<Label
					htmlFor="jobDescription"
					className="block text-sm font-medium text-gray-700"
				>
					Job Description (Optional)
				</Label>
				<textarea
					value={formData.jobDescription}
					onChange={(e) => handleChange("jobDescription", e.target.value)}
					placeholder="Describe the job role or expectations..."
					className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
				/>
			</div>
		</div>
	);
};

export default IntroductoryStep;
