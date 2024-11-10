import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatToDateInputValue = (dateString: string): string => {
	if (!dateString) return "";

	const [month, year] = dateString.split("/");

	if (!month || !year) return "";

	return `${year}-${String(month)}`;
};

export const formatToMonthYearDate = (dateString: string): string => {
	if (!dateString) return "";

	const [year, month] = dateString.split("-");

	if (!month || !year) return "";

	return `${month}/${year}`;
};
