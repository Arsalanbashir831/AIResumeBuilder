import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { formatToDateInputValue, formatToMonthYearDate } from "@/lib/utils";

type EducationFieldKeys =
	| "institution"
	| "degree"
	| "startDate"
	| "endDate"
	| "isCurrent";

interface EducationFieldProps {
	education: {
		institution: string;
		degree: string;
		startDate: string;
		endDate: string;
		isCurrent: boolean;
	};
	onChange: (
		field: EducationFieldKeys,
		value: string | boolean,
		index: number
	) => void;
	handleCheckboxChange: (index: number, checked: boolean) => void;
	index: number;
}

const EducationField: React.FC<EducationFieldProps> = ({
	education,
	onChange,
	handleCheckboxChange,
	index,
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

			{/* Degree */}
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

			{/* Start Date */}
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

			{/* End Date or Current Education Checkbox */}
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
		</div>
	);
};

export default EducationField;
