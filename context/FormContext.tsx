"use client";

import { FormState } from "@/types/global";
import React, { createContext, useContext, useState } from "react";

interface FormContextType {
	formData: FormState;
	setFormData: React.Dispatch<React.SetStateAction<FormState>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [formData, setFormData] = useState<FormState>({
		userType: "student",
		domain: "",
	});

	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormContext.Provider>
	);
};

export const useFormContext = (): FormContextType => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error("useFormContext must be used within a FormProvider");
	}
	return context;
};
