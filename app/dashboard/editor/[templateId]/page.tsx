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
import { addUserInfo, createResume, editResume, getResumeById } from "@/app/api/resume";
import { useFormContext } from "@/context/FormContext";
import jsPDF from "jspdf";
import { useSubscriptionContext } from "@/context/CreditsContext";
import { BASE_URL } from "@/app/Constant";





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
	const [snapshotUrl, setSnapshotUrl] = useState<string | null>(localStorage.getItem('template_ss')|| null);
	const [snapshotPreviousUrl, setSnapshotPreviousUrl] = useState<string | null>(
		localStorage.getItem('template_ss')|| null
	);
	const { color } = useColor();
	const { formData } = useFormContext()
	const { subscription, refreshSubscription } = useSubscriptionContext()
	const [isEditResume, setIsEditResume] = useState(false)

	const sendTemplateDataToIframe = useCallback(() => {
		if (iframeRef.current) {
			iframeRef.current.contentWindow?.postMessage(
				{ type: "UPDATE_TEMPLATE_DATA", payload: { resumeData, templateId } },
				"*"
			);
		}
	}, [resumeData, templateId]);
	//  console.log('snapshot',snapshot);
	const credits = subscription?.credits ?? 0;
	const tokensUsed = subscription?.tokens_used ?? 0;



	
	useEffect(() => {

		const handleSnapshotMessage = (event: MessageEvent) => {
			if (event.data && event.data.type === "TEMPLATE_SNAPSHOT") {
				console.log(event.data)
				setSnapshotUrl(event.data.payload);
			}
		};
		window.addEventListener("message", handleSnapshotMessage);
		// return () => window.removeEventListener("message", handleSnapshotMessage);
	}, []);

	useEffect(() => {
		sendTemplateDataToIframe();
	}, [sendTemplateDataToIframe, color]);

	useEffect(() => {
		if (snapshotUrl) {
			setSnapshotPreviousUrl(snapshotUrl);
		}
	}, [snapshotUrl, snapshotPreviousUrl]);
	useEffect(() => {
		const creditsData = async () => {
			await refreshSubscription()
		}
		creditsData()
	}, [])


	// Listen for messages from the hidden iframe with the snapshot image



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
			setIsSubmitting(true); // Indicate submission process started


			console.log("resdata", resumeData);
			// Validate authentication token
			if (!authToken) {
				throw new Error("Authentication token is missing. Please log in.");
			}
			const formData = new FormData();

			formData.append(
				"data",
				JSON.stringify({
					...resumeData,
					templateId: templateId,
				})
			);
			if (snapshotUrl) {
				const response = await fetch(snapshotUrl);
				const blob = await response.blob();
				const fileName = `snapshot_${templateId}.jpeg`;
				formData.append("picture", blob, fileName);
			} else {
				console.warn("No snapshot available to upload.");
			}
			console.log("Submitting final resume data:", {
				...resumeData,
				templateId: templateId,
			});
			if (id) {
				await editResume(authToken, formData, id)
				if (credits > 0) {
					handleDownloadClick();
				} else {
					setShowModal(true);
				}
			} else {
				await createResume(authToken, formData);

				console.log(tokensUsed, credits);

				if (credits > 0) {
					handleDownloadClick();
				} else {
					setShowModal(true);
				}


			}


		} catch (error: any) {

			console.error("Error saving resume:", error);
			const errorMessage =
				error.response?.data?.message ||
				error.message ||
				"Failed to save resume. Please try again.";
			alert(errorMessage);
		} finally {

			setIsSubmitting(false);
		}
	};


	if (!template) {
		return <p>Template not found</p>;
	}

	const handlePayNow = () => {
		router.push("/dashboard/plans");
		setShowModal(false);
	};
	const handleClose = () => {
		router.push("/dashboard");
		setShowModal(false);
	};


	useEffect(() => {
		const fetchResumeData = async () => {
			const token = localStorage.getItem('accessToken')
			const response = await getResumeById(token, id);
			console.log(response.data.sections);
			setResumeData(response?.data)
			console.log(response.data);
			
			// setSnapshotUrl( `${BASE_URL}/${response.data.picture}`)
		}
		// if there is id in params than we will fetch the get resume by id api
		if (id) {
			fetchResumeData()
			
			setIsEditResume(true)
		}



	}, [])

	return (
		<div className="flex flex-col h-screen p-8 pt-24 container mx-auto">
			<header className="flex justify-between items-center mb-4">
				<Button variant="default" onClick={() => {router.push("/dashboard/") ;localStorage.removeItem('template_ss')}}>
					<ArrowLeft size={24} />
					To Dashboard
				</Button>
			</header>
			<div className="flex flex-col lg:flex-row-reverse gap-5">
				{showModal && (
					<SubscriptionModal
						onClose={handleClose}
						onPayNow={handlePayNow}
					/>
				)}

				<div className="w-full lg:w-1/2">
					<div className="flex justify-between items-center mb-4">
						<ColorPicker iframeRef={iframeRef} />
						{isEditResume && (<>
							<Button variant="default" onClick={credits > 0 ? handleDownloadClick : handlePayNow} disabled={!snapshotUrl}>
								{credits > 0 ? "Download" : "Renew Credits"}
							</Button>
						</>)}

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
									// Trigger refresh or display loading state
									<>

										<div className="flex flex-col justify-center items-center space-y-4 h-[400px]">
											<Image
												src="/logo.png"
												width={100}
												height={100}
												alt="GetSetCV Logo"
												className="animate-pulseOpacity"
											/>
										</div>
									</>
								)

								}
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
