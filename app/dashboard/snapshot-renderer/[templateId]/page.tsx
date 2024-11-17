"use client";

import { useRef, useEffect } from "react";
import { templates } from "@/data/templatesConfig";
import { toPng } from "html-to-image";
import { useParams } from "next/navigation";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import { TemplateData } from "@/types/global";
import Image from "next/image";

export default function SnapshotRenderer() {
	const { templateId } = useParams();
	const templateRef = useRef<HTMLDivElement>(null);
	const templateData: TemplateData =
		DUMMY_TEMPLATES_DATA[
			Math.floor(Math.random() * DUMMY_TEMPLATES_DATA.length)
		];

	useEffect(() => {
		if (templateId && templateRef.current) {
			const generateSnapshot = async () => {
				try {
					const dataUrl = await toPng(templateRef.current!, {
						backgroundColor: "#ffffff", // Optional: Add a background color
					});

					// Post snapshot back to parent window
					parent.postMessage({ templateId, dataUrl }, "*");
				} catch (error) {
					console.error("Failed to generate snapshot:", error);
				}
			};
			generateSnapshot();
		}
	}, [templateId]);

	const template = templates.find((t) => t.id === templateId);

	return (
		<div ref={templateRef} style={{ width: "8.5in" }}>
			{template ? (
				<template.component templateData={templateData} />
			) : (
				// show a loader
				<div className='flex flex-col justify-center items-center space-y-4 h-[400px]'>
					<Image
						src='/logo.png'
						width={100}
						height={100}
						alt='GetSetCV Logo'
						className='animate-pulseOpacity'
					/>
				</div>
			)}
		</div>
	);
}
