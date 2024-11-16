"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Type definition for the context
type ColorContextType = {
	color: string;
	setColor: React.Dispatch<React.SetStateAction<string>>;
};
interface ColorProviderProps {
	children: ReactNode;
}

// Create the context
const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
	// use default template-hue, template-saturation, template-lightness values
	const [color, setColor] = useState<string>("");

	return (
		<ColorContext.Provider value={{ color, setColor }}>
			{children}
		</ColorContext.Provider>
	);
};

// Custom hook to use the color context
export const useColor = () => {
	const context = useContext(ColorContext);
	if (!context) {
		throw new Error("useColor must be used within a ColorProvider");
	}
	return context;
};
