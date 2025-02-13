'use client'
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { formatToDateInputValue, formatToMonthYearDate } from "@/lib/utils";
import { TrashIcon, PlusIcon, BrainIcon } from "lucide-react"; // Import Lucid icons
import AiButton from "./AiButton";
import { AiImproveContent } from "@/app/api/resume";
import { useState } from "react";

type ExperienceFieldKeys =
	| "title"
	| "company"
	| "location"
	| "startDate"
	| "endDate"
	| "isCurrent"
	| "achievements";

interface ExperienceFieldProps {
	experience: {
		title: string;
		company: string;
		location: string;
		startDate: string;
		endDate: string;
		isCurrent: boolean;
		achievements: string[];
	};
	onChange: (
		field: ExperienceFieldKeys,
		value: string | boolean | string[],
		index: number
	) => void;
	handleCheckboxChange: (index: number, checked: boolean) => void;
	index: number;
	fieldsIncluded?: {
		title?: boolean;
		company?: boolean;
		location?: boolean;
		startDate?: boolean;
		endDate?: boolean;
		achievements?: boolean;
	};
}

const ExperienceField: React.FC<ExperienceFieldProps> = ({
	experience,
	onChange,
	handleCheckboxChange,
	index,
	fieldsIncluded = {
		title: true,
		company: true,
		location: true,
		startDate: true,
		endDate: true,
		achievements: true,
	},
}) => {
	const [loading, setLoading] = useState(false);
	const formattedStartDate = formatToDateInputValue(experience.startDate);
	const formattedEndDate = experience.isCurrent
		? "Present"
		: formatToDateInputValue(experience.endDate);

	// Handle change for start and end dates
	const handleDateChange = (field: ExperienceFieldKeys, value: string) => {
		if (field === "endDate" && value === "Present") {
			onChange("isCurrent", true, index);
			onChange("endDate", "", index);
		} else if (field === "endDate" && value !== "Present") {
			onChange("isCurrent", false, index);
			onChange("endDate", formatToMonthYearDate(value), index);
		} else if (field === "startDate") {
			onChange(field, formatToMonthYearDate(value), index);
		}
	};

	// Handle changes to achievements
	const handleAchievementChange = (index: number, value: string) => {
		const updatedAchievements = [...experience.achievements];
		updatedAchievements[index] = value;
		onChange("achievements", updatedAchievements, index);
	};

	// Add a new achievement
	const handleAddAchievement = () => {
		const updatedAchievements = [...experience.achievements, ""];
		onChange("achievements", updatedAchievements, index);
	};

	// Delete an achievement
	const handleDeleteAchievement = (index: number) => {
		const updatedAchievements = experience.achievements.filter(
			(_, i) => i !== index
		);
		onChange("achievements", updatedAchievements, index);
	};

	return (
		<div className='my-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
			{/* Job Title */}
			{fieldsIncluded.title && (
				<div className='space-y-2'>
					<label
						htmlFor={`title-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						Job Title
					</label>
					<Input
						id={`title-${index}`}
						value={experience.title}
						onChange={(e) => onChange("title", e.target.value, index)}
						className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
					/>
				</div>
			)}

			{/* Company Name */}
			{fieldsIncluded.company && (
				<div className='space-y-2'>
					<label
						htmlFor={`company-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						Company
					</label>
					<Input
						id={`company-${index}`}
						value={experience.company}
						onChange={(e) => onChange("company", e.target.value, index)}
						className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
					/>
				</div>
			)}

			{/* Location */}
			{fieldsIncluded.location && (
				<div className='space-y-2'>
					<label
						htmlFor={`company-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						Location
					</label>
					<Input
						id={`location-${index}`}
						value={experience.location}
						onChange={(e) => onChange("location", e.target.value, index)}
						className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
					/>
				</div>
			)}

			{/* Start Date */}
			{fieldsIncluded.startDate && (
				<div className='space-y-2'>
					<label
						htmlFor={`startDate-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						Start Date
					</label>
					<Input
						id={`startDate-${index}`}
						type='month'
						value={formattedStartDate}
						onChange={(e) => handleDateChange("startDate", e.target.value)}
						className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
					/>
				</div>
			)}

			{/* End Date or Current Job Checkbox */}
			{fieldsIncluded.endDate && (
				<div className='space-y-2'>
					<label
						htmlFor={`endDate-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						End Date
					</label>
					{experience.isCurrent ? (
						<Input
							id={`endDate-${index}`}
							value='Present'
							disabled={true}
							className='w-full mt-1 p-3 border rounded-lg bg-gray-200 text-gray-600'
						/>
					) : (
						<Input
							id={`endDate-${index}`}
							type='month'
							value={formattedEndDate}
							onChange={(e) => handleDateChange("endDate", e.target.value)}
							className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
						/>
					)}

					<div className='flex items-center mt-3'>
						<Checkbox
							id={`isCurrent-${index}`}
							checked={experience.isCurrent}
							onCheckedChange={(checked) =>
								handleCheckboxChange(index, checked as boolean)
							}
						/>
						<label
							htmlFor={`isCurrent-${index}`}
							className='ml-2 text-sm text-gray-700'>
							Current Job
						</label>
					</div>
				</div>
			)}

			{/* Achievements */}
			{fieldsIncluded.achievements && (
				<div className='space-y-2 md:col-span-2'>
					<div className='flex items-center justify-between'>
						<label
							htmlFor={`achievements-${index}`}
							className='block font-semibold text-gray-700'>
							Achievements
						</label>

						<Button
							type='button'
							size='sm'
							onClick={handleAddAchievement}
							className='mt-3 p-2 text-white rounded-lg focus:outline-none'>
							<PlusIcon className='w-4 h-4' />
							New
						</Button>
					</div>

					{experience.achievements.map((achievement, idx) => (
						<div key={idx} className="flex items-center space-x-3 mt-2">
							{/* Achievement Input */}
							<Input
								id={`achievement-${idx}`}
								value={achievement}
								onChange={(e) => handleAchievementChange(idx, e.target.value)}
								className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2"
							/>

							<AiButton isDisabled={achievement.length===0}
								loading={loading}
								onClick={async () => {
									setLoading(true); // Show loading spinner
									const authToken = localStorage.getItem("accessToken");

									if (!authToken) {
										alert("Authentication token not found. Please login.");
										setLoading(false); // Ensure loading is stopped
										return;
									}

									try {
										const improvedContent = await AiImproveContent(
											{ content: achievement }, // Data payload
											authToken
										);

										if (improvedContent) {
											handleAchievementChange(idx, improvedContent);
										} else {
											alert("Failed to improve content. Please try again.");
										}
									} catch (error) {
										console.error("Error improving content:", error);
										alert("An unexpected error occurred. Please try again.");
									} finally {
										setLoading(false); // Ensure loading is stopped
									}
								}}
								label="AI Improve"
							/>


							{/* Delete Achievement Button */}
							<Button
								type='button'
								onClick={() => handleDeleteAchievement(idx)}
								className='ml-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none'>
								<TrashIcon className='w-4 h-4' />
							</Button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ExperienceField;
