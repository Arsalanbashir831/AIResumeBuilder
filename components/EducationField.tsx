import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { formatToDateInputValue, formatToMonthYearDate } from "@/lib/utils";
import { EducationItem } from "@/types/global";

type EducationFieldKeys =
	| "institution"
	| "degree"
	| "location"
	| "totalGpa"
	| "obtainedGpa"
	| "startDate"
	| "endDate"
	| "isCurrent";

interface EducationFieldProps {
	education: EducationItem;
	onChange: (
		field: EducationFieldKeys,
		value: string | boolean,
		index: number
	) => void;
	handleCheckboxChange: (index: number, checked: boolean) => void;
	index: number;
	fieldsIncluded?: {
		institution?: boolean;
		degree?: boolean;
		location?: boolean;
		gpa?: boolean;
		startDate?: boolean;
		endDate?: boolean;
	};
}

const EducationField: React.FC<EducationFieldProps> = ({
	education,
	onChange,
	handleCheckboxChange,
	index,
	fieldsIncluded = {
		institution: true,
		degree: true,
		location: true,
		gpa: true,
		startDate: true,
		endDate: true,
	},
}) => {
	const formattedStartDate = formatToDateInputValue(education.startDate);
	const formattedEndDate = education.isCurrent
		? "Present"
		: formatToDateInputValue(education.endDate);

	const handleDateChange = (field: EducationFieldKeys, value: string) => {
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

	return (
		<div className='my-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
			{/* Institution */}
			{fieldsIncluded.institution && (
				<div className='space-y-2'>
					<label
						htmlFor={`institution-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						Institution
					</label>
					<Input
						id={`institution-${index}`}
						value={education.institution}
						onChange={(e) => onChange("institution", e.target.value, index)}
						className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
					/>
				</div>
			)}

			{/* Degree */}
			{fieldsIncluded.degree && (
				<div className='space-y-2'>
					<label
						htmlFor={`degree-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						Degree
					</label>
					<Input
						id={`degree-${index}`}
						value={education.degree}
						onChange={(e) => onChange("degree", e.target.value, index)}
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
						value={education.location}
						onChange={(e) => onChange("location", e.target.value, index)}
						className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
					/>
				</div>
			)}

			{/* Obtained GPA */}
			{fieldsIncluded.gpa && (
				<>
					<div className='space-y-2'>
						<label
							htmlFor={`obtainedGpa-${index}`}
							className='block text-sm font-semibold text-gray-700'>
							Obtained GPA
						</label>
						<Input
							id={`obtainedGpa-${index}`}
							value={education.obtainedGpa}
							onChange={(e) => onChange("obtainedGpa", e.target.value, index)}
							className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
						/>
					</div>

					{/* TotalGPA */}
					<div className='space-y-2'>
						<label
							htmlFor={`totalGpa-${index}`}
							className='block text-sm font-semibold text-gray-700'>
							GPA
						</label>
						<Input
							id={`totalGpa-${index}`}
							value={education.totalGpa}
							onChange={(e) => onChange("totalGpa", e.target.value, index)}
							className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
						/>
					</div>
				</>
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

			{/* End Date or Current Education Checkbox */}
			{fieldsIncluded.endDate && (
				<div className='space-y-2'>
					<label
						htmlFor={`endDate-${index}`}
						className='block text-sm font-semibold text-gray-700'>
						End Date
					</label>
					{education.isCurrent ? (
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
							checked={education.isCurrent}
							onCheckedChange={(checked) =>
								handleCheckboxChange(index, checked as boolean)
							}
						/>
						<label
							htmlFor={`isCurrent-${index}`}
							className='ml-2 text-sm text-gray-700'>
							Currently Enrolled
						</label>
					</div>
				</div>
			)}
		</div>
	);
};

export default EducationField;
