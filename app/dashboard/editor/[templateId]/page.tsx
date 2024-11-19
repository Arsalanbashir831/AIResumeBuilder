"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import {
	Achievement,
	Certificate,
	EducationItem,
	ExperienceItem,
	Expertise,
	Hobby,
	SectionKey,
	TemplateData,
} from "@/types/global";
import { useParams, useRouter } from "next/navigation";
import { templates } from "@/data/templatesConfig";
import { ArrowLeft } from "lucide-react";
import ColorPicker from "@/components/ColorPicker";
import StepContent from "@/components/StepContent";
import SubscriptionModal from "@/components/SubscriptionModal";
import Image from "next/image";
import { useColor } from "@/context/ColorContext";

export default function TemplateEditor() {
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const [step, setStep] = useState(1);
	const [resumeData, setResumeData] = useState<TemplateData>(
		DUMMY_TEMPLATES_DATA[
			Math.floor(Math.random() * DUMMY_TEMPLATES_DATA.length)
		]
	);

	const { templateId } = useParams();
	const router = useRouter();
	const template = templates.find((t) => t.id === templateId);
	const sectionConfig = template
		? [{ key: "intro", label: "Intro" }, ...template.sections]
		: [{ key: "intro", label: "Intro" }];
	const [showModal, setShowModal] = useState(false);
	const [snapshotUrl, setSnapshotUrl] = useState<string | null>(null);
	const [snapshotPreviousUrl, setSnapshotPreviousUrl] = useState<string | null>(
		null
	);
	const { color } = useColor();

	// Memoize the sendTemplateDataToIframe function to avoid unnecessary re-creations
	const sendTemplateDataToIframe = useCallback(() => {
		if (iframeRef.current) {
			iframeRef.current.contentWindow?.postMessage(
				{ type: "UPDATE_TEMPLATE_DATA", payload: { resumeData, templateId } },
				"*"
			);
		}
	}, [resumeData, templateId]);

	useEffect(() => {
		sendTemplateDataToIframe();
	}, [sendTemplateDataToIframe, color]);

	useEffect(() => {
		if (snapshotUrl) {
			setSnapshotPreviousUrl(snapshotUrl);
		}
	}, [snapshotUrl]);

	// Listen for messages from the hidden iframe with the snapshot image
	useEffect(() => {
		const handleSnapshotMessage = (event: MessageEvent) => {
			if (event.data && event.data.type === "TEMPLATE_SNAPSHOT") {
				setSnapshotUrl(event.data.payload);
			}
		};
		window.addEventListener("message", handleSnapshotMessage);
		return () => window.removeEventListener("message", handleSnapshotMessage);
	}, []);

	const handleInputChange = (
		section: SectionKey,
		field: string | null,
		value:
			| string
			| { [key: string]: string }
			| ExperienceItem[]
			| string[]
			| Achievement[]
			| EducationItem[]
			| Expertise[]
			| Certificate[]
			| Hobby[]
	) => {
		// Clear the snapshot URL to reset the preview
		setSnapshotUrl(null);

		// Update resume data
		setResumeData((prevData) => ({
			...prevData,
			sections: {
				...prevData.sections,
				[section]: field
					? {
							...(typeof prevData.sections[section] === "object"
								? prevData.sections[section]
								: {}),
							[field]: value,
					  }
					: value,
			},
		}));
	};

	const handleStepChange = (newStep: number) => {
		setStep(newStep);
	};

	const handleDownloadClick = () => {
		setShowModal(true);
	};

	if (!template) {
		return <p>Template not found</p>;
	}

	return (
		<div className='flex flex-col h-screen p-8 pt-24 container mx-auto'>
			{/* Header Section */}
			<header className='flex justify-between items-center mb-4'>
				<Button variant='default' onClick={() => router.push("/dashboard/")}>
					<ArrowLeft size={24} />
					To Dashboard
				</Button>
			</header>
			<div className='flex flex-col lg:flex-row-reverse gap-5'>
				{showModal && <SubscriptionModal onClose={() => setShowModal(false)} />}

				<div className='w-full lg:w-1/2'>
					<div className='flex justify-between items-center mb-4'>
						<ColorPicker iframeRef={iframeRef} />

						<Button variant='default' onClick={handleDownloadClick}>
							Download
						</Button>
					</div>

					<Card className='shadow-lg'>
						<CardContent className='p-4'>
							<div className='flex justify-center items-center w-full mx-auto'>
								{snapshotUrl ? (
									<Image
										src={snapshotUrl}
										alt='Resume Preview'
										className='rounded-lg shadow-md aspect-[2/3]'
										width={900}
										height={400}
									/>
								) : snapshotPreviousUrl ? (
									<Image
										src={snapshotPreviousUrl}
										alt='Resume Preview'
										className='rounded-lg shadow-md aspect-[2/3]'
										width={900}
										height={400}
									/>
								) : (
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

							{/* Hidden iframe for rendering the template */}
							<iframe
								ref={iframeRef}
								src='/dashboard/hidden-template-renderer'
								style={{ opacity: 0, height: 0, width: 0 }}
								onLoad={() => setTimeout(sendTemplateDataToIframe, 100)}
							/>
						</CardContent>
					</Card>
				</div>

				<div className='w-full lg:w-1/2'>
					<div className='flex space-x-2 mb-4 overflow-x-auto whitespace-nowrap'>
						{sectionConfig.map((section, idx) => (
							<Button
								key={section.key}
								variant={step === idx + 1 ? "default" : "secondary"}
								onClick={() => handleStepChange(idx + 1)}>
								{section.label}
							</Button>
						))}
					</div>

					<Card className='shadow-lg my-6'>
						<CardContent className='p-6'>
							<StepContent
								sectionKey={sectionConfig[step - 1].key}
								resumeData={resumeData}
								handleInputChange={handleInputChange}
								fieldsIncluded={sectionConfig[step - 1]?.fieldsIncluded}
							/>
							<div className='flex justify-between mt-6'>
								<Button onClick={() => setStep(step - 1)} disabled={step === 1}>
									Previous
								</Button>
								<Button
									onClick={() => setStep(step + 1)}
									disabled={step === sectionConfig.length}>
									Next
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
