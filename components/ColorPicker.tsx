"use client";

import React, { useState, useEffect, useRef } from "react";
import { useColor } from "@/context/ColorContext";
import { Label } from "./ui/label";
import { SketchPicker } from "react-color";

type ColorPickerProps = {
	iframeRef?: React.RefObject<HTMLIFrameElement>;
	onColorChange?: (hslColor: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
	iframeRef,
	onColorChange,
}) => {
	const { color, setColor } = useColor();
	const [isPickerVisible, setPickerVisible] = useState(false);
	const pickerRef = useRef<HTMLDivElement | null>(null); // Reference for the color picker container

	const handleColorChange = (color: string) => {
		setColor(color); // Update color state in context
		const hslColor = hexToHsl(color);

		const hue = hslColor.split(" ")[0];
		const saturation = hslColor.split(" ")[1];
		const lightness = hslColor.split(" ")[2];

		// Set individual HSL components as CSS variables
		document.documentElement.style.setProperty("--template-hue", hue);
		document.documentElement.style.setProperty(
			"--template-saturation",
			saturation
		);
		document.documentElement.style.setProperty(
			"--template-lightness",
			lightness
		);

		// Inject CSS variables into iframe document if available
		if (iframeRef?.current) {
			const iframeDoc = iframeRef.current.contentWindow?.document;
			if (iframeDoc) {
				iframeDoc.documentElement.style.setProperty("--template-hue", hue);
				iframeDoc.documentElement.style.setProperty(
					"--template-saturation",
					saturation
				);
				iframeDoc.documentElement.style.setProperty(
					"--template-lightness",
					lightness
				);
			}
		}

		// Optional: Callback if provided to handle color change externally
		if (onColorChange) {
			onColorChange(hslColor);
		}
	};

	// Function to convert HEX to HSL format
	const hexToHsl = (hex: string): string => {
		const r = parseInt(hex.slice(1, 3), 16) / 255;
		const g = parseInt(hex.slice(3, 5), 16) / 255;
		const b = parseInt(hex.slice(5, 7), 16) / 255;

		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let h = 0,
			s = 0;
		const l = (max + min) / 2;

		if (max !== min) {
			const delta = max - min;
			s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
			h =
				max === r
					? (g - b) / delta + (g < b ? 6 : 0)
					: max === g
					? (b - r) / delta + 2
					: (r - g) / delta + 4;
			h /= 6;
		}

		// Return HSL as a CSS-friendly string
		return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(
			l * 100
		)}%`;
	};

	// Toggle color picker visibility
	const togglePicker = () => setPickerVisible(!isPickerVisible);

	// Close the picker if the user clicks outside of it
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				pickerRef.current &&
				!pickerRef.current.contains(event.target as Node)
			) {
				setPickerVisible(false); // Close the picker
			}
		};

		// Add event listener
		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup event listener on component unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className='relative'>
			<div className='flex items-center gap-4'>
				<Label htmlFor='colorInput'>Template Color:</Label>
				<button
					className='w-8 h-8 rounded-full border border-gray-300 bg-white'
					style={{ backgroundColor: color }}
					onClick={togglePicker}
				/>
			</div>

			{/* Conditional rendering of the custom color picker */}
			{isPickerVisible && (
				<div ref={pickerRef} className='absolute top-full mt-2 left-0 z-10'>
					<SketchPicker
						color={color}
						onChangeComplete={(color: { hex: string }) =>
							handleColorChange(color.hex)
						}
					/>
				</div>
			)}
		</div>
	);
};

export default ColorPicker;
