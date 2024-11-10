export default function ResumePreview({ formData }) {
	return (
		<div className='resume-preview'>
			<h2>{formData.personalInfo?.name || "Your Name"}</h2>
			{/* Render other sections conditionally based on `formData` */}
		</div>
	);
}
