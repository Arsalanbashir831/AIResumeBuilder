'use client'
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DUMMY_TEMPLATES_DATA } from "@/data/dummy-templates-data";
import { TemplateData } from "@/types/global";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { templates } from "@/data/templatesConfig";
import { ArrowLeft } from "lucide-react";
import ColorPicker from "@/components/ColorPicker";
import StepContent from "@/components/StepContent";
import SubscriptionModal from "@/components/SubscriptionModal";
import Image from "next/image";
import { useColor } from "@/context/ColorContext";
import { addUserInfo, createResume, getResumeById } from "@/app/api/resume";
import { useFormContext } from "@/context/FormContext";
import jsPDF from "jspdf";


export default function TemplateEditor() {
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const [step, setStep] = useState(1);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [resumeData, setResumeData] = useState<TemplateData>(
		DUMMY_TEMPLATES_DATA[
		Math.floor(Math.random() * DUMMY_TEMPLATES_DATA.length)
		]
	);
	const { templateId } = useParams();
	const searchParams = useSearchParams();
	const id = searchParams.get("id");

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
	const { formData } = useFormContext()

	const sendTemplateDataToIframe = useCallback(() => {
		if (iframeRef.current) {
			iframeRef.current.contentWindow?.postMessage(
				{ type: "UPDATE_TEMPLATE_DATA", payload: { resumeData, templateId } },
				"*"
			);
		}
	}, [resumeData, templateId]);
// console.log(templateId);

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

	// useEffect(()=>{
	// 	const fetchResume = async()=>{
	// 		getResumeById()
	// 	}
	// },[])
	const handleDownloadClick = () => {
		if (!snapshotUrl) {
			alert("Snapshot is not available for download");
			return;
		}

		const pdf = new jsPDF({
			orientation: "portrait",
			unit: "px",
			format: [900, 1200],
		});

		pdf.addImage(snapshotUrl, "JPEG", 0, 0, 900, 1200);
		pdf.save("resume.pdf");
	};
	const handleInputChange = (
		section: keyof TemplateData['sections'],
		field: string | null,
		value: any
	) => {
		setSnapshotUrl(null);

		setResumeData((prevData) => ({
			...prevData,
			sections: {
				...prevData.sections,
				[section]: field
					? {
						...(prevData.sections[section] as Record<string, any>),
						[field]: value,
					}
					: value,
			},
		}));
	};

	const handleStepChange = async (newStep: number) => {
		const token = localStorage.getItem("accessToken");

		if (!token) {
			alert("Authentication token is missing. Please log in.");
			return;
		}
		try {
			if (step === 1 && newStep > 1) {

				console.log("Submitting first section data:", formData);
				await addUserInfo(token, { user_data: formData });
			}

			if (newStep === sectionConfig.length + 1) {
				await handleSubmit(token);
			} else {
				setStep(newStep);
			}
		} catch (error) {
			console.error("Error during step change:", error);
			alert("An error occurred. Please try again.");
		}
	};

	const handleSubmit = async (authToken: string) => {
		try {
			setIsSubmitting(true);

			if (!authToken) {
				throw new Error("Authentication token is missing. Please log in.");
			}

			console.log("Submitting final resume data:", resumeData);

			await createResume(authToken, {
				data: {
					...resumeData,
					templateId:templateId
					// Uncomment this if you want to include the snapshot
					// resumePic: snapshotUrl,
				},
			});


			setShowModal(true)
		} catch (error) {
			console.error("Error saving resume:", error);
			alert("Failed to save resume. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	if (!template) {
		return <p>Template not found</p>;
	}


	useEffect(() => {
		const fetchResumeData = async () => {
			const token = localStorage.getItem('accessToken')
			const response = await getResumeById(token, id);
			console.log(response.data.sections);
			 setResumeData(response?.data)
		}
		// if there is id in params than we will fetch the get resume by id api
		if (id) {
			fetchResumeData()
		}
	}, [])
	return (
		<div className="flex flex-col h-screen p-8 pt-24 container mx-auto">
			<header className="flex justify-between items-center mb-4">
				<Button variant="default" onClick={() => router.push("/dashboard/")}>
					<ArrowLeft size={24} />
					To Dashboard
				</Button>
			</header>
			<div className="flex flex-col lg:flex-row-reverse gap-5">
				{showModal && <SubscriptionModal onClose={() => {
					router.push('/dashboard')
					setShowModal(false)
				}} />}
				<div className="w-full lg:w-1/2">
					<div className="flex justify-between items-center mb-4">
						<ColorPicker iframeRef={iframeRef} />

						<Button variant="default" onClick={handleDownloadClick} disabled={!snapshotUrl}>
							Download
						</Button>
					</div>
					<Card className="shadow-lg">
						<CardContent className="p-4">
							{/* Resume preview or snapshot */}
							<div className="flex justify-center items-center w-full mx-auto">
								{snapshotUrl ? (
									<Image
										src={snapshotUrl}
										alt="Resume Preview"
										className="rounded-lg shadow-md aspect-[2/3]"
										width={900}
										height={400}
									/>
								) : snapshotPreviousUrl ? (
									<Image
										src={snapshotPreviousUrl}
										alt="Resume Preview"
										className="rounded-lg shadow-md aspect-[2/3]"
										width={900}
										height={400}
									/>
								) : (
									<div className="flex flex-col justify-center items-center space-y-4 h-[400px]">
										<Image
											src="/logo.png"
											width={100}
											height={100}
											alt="GetSetCV Logo"
											className="animate-pulseOpacity"
										/>
									</div>
								)}
							</div>

							<iframe
								ref={iframeRef}
								src="/dashboard/hidden-template-renderer"
								style={{ opacity: 0, height: 0, width: 0 }}
								onLoad={() => setTimeout(sendTemplateDataToIframe, 100)}
							/>
						</CardContent>
					</Card>
				</div>

				<div className="w-full lg:w-1/2">
					<div className="flex space-x-2 mb-4 overflow-x-auto whitespace-nowrap">
						{sectionConfig.map((section, idx) => (
							<Button
								key={section.key}
								variant={step === idx + 1 ? "default" : "secondary"}
								onClick={() => handleStepChange(idx + 1)}
							>
								{section.label}
							</Button>
						))}
					</div>

					<Card className="shadow-lg my-6">
						<CardContent className="p-6">
							<StepContent
								sectionKey={sectionConfig[step - 1].key}
								resumeData={resumeData}
								handleInputChange={handleInputChange}
								fieldsIncluded={sectionConfig[step - 1]?.fieldsIncluded}
							/>
							<div className="flex justify-between mt-6">
								<Button onClick={() => setStep(step - 1)} disabled={step === 1}>
									Previous
								</Button>
								<Button
									onClick={() => handleStepChange(step + 1)}

								>
									{step === sectionConfig.length ? "Submit" : "Next"}
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
