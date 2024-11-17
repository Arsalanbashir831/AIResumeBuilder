"use client";

import React, { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Template, TemplateData } from "@/types/global";
import { templates } from "@/data/templatesConfig";

export default function HiddenTemplateRenderer() {
	const templateRef = useRef<HTMLDivElement | null>(null);
	const [templateId, setTemplateId] = useState<string | null>(null);
	const [templateData, setTemplateData] = useState<TemplateData | null>(null);
	const [template, setTemplate] = useState<Template>();

	useEffect(() => {
		if (templateId) {
			const template = templates.find((template) => template.id === templateId);
			if (template) {
				setTemplate(template);
			}
		}
	}, [templateId]);

	// Listen for messages from the main editor page
	useEffect(() => {
		const handleMessage = async (event: MessageEvent) => {
			if (event.data && event.data.type === "UPDATE_TEMPLATE_DATA") {
				setTemplateData(event.data.payload.resumeData);
				setTemplateId(event.data.payload.templateId);

				// Delay to allow DOM to update with the latest data
				setTimeout(async () => {
					if (templateRef.current) {
						const imageDataUrl = await toPng(templateRef.current);
						window.parent.postMessage(
							{ type: "TEMPLATE_SNAPSHOT", payload: imageDataUrl },
							"*"
						);
					}
				}, 50); // 50ms delay to allow DOM update
			}
		};
		window.addEventListener("message", handleMessage);
		return () => window.removeEventListener("message", handleMessage);
	}, []);

	if (!templateData) return null;

	return (
		<div ref={templateRef} style={{ width: "8.5in" }}>
			{template && <template.component templateData={templateData} isEditing />}
		</div>
	);
}
