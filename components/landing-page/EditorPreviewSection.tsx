import Image from "next/image";
import { Button } from "../ui/button";
import StatsSection from "./StatsSection";

export default function EditorPreviewSection() {
	const features = [
		
		
		{
		  title: "Multiple Layouts & Templates",
		  description:
			"Access a range of ATS-friendly, modern, and creative resume templates designed to fit different job industries and experience levels.",
		},
		
		{
		  title: "Live Preview & Real-time Edits",
		  description:
			"Instantly see how your resume looks as you type and make real-time adjustments to optimize formatting and content.",
		},
		{
		  title: "ATS Optimization & Keyword Suggestions",
		  description:
			"Get automatic suggestions for job-specific keywords to improve your resume's ATS (Applicant Tracking System) compatibility.",
		},
		{
		  title: "One-Click PDF Export",
		  description:
			"Download your resume in multiple formats, including PDF and DOCX, ensuring compatibility with job applications and online submissions.",
		},
		
		
		
	  ];
	  
	return (
		<section className='p-12 bg-gradient-to-t from-white to-[#f5651244] container mx-auto relative z-10'>
			<div className='container px-4 md:px-6'>
				{/* Header */}
				<h2 className='text-2xl md:text-3xl font-bold mb-6 text-slate-800'>
					Glimpse Of Our Platform
				</h2>

				<div className='grid md:grid-cols-2 gap-8 items-center'>
					{/* Left: Image */}
					<div className='relative'>
						<Image
							src='/placeholder-dashboard.png'
							alt='Resume editor interface'
							width={500}
							height={300}
							className='shadow-lg rounded-lg'
						/>
					</div>

					{/* Right: Text & Features */}
					<div>
						<ul className='space-y-4 text-slate-800'>
							{features.map((feature, index) => (
								<li key={index} className='flex items-start space-x-2'>
									<p className='leading-tight'>
										<span className='font-bold text-md'>{feature.title}</span>
										<br />
										{feature.description}
									</p>
								</li>
							))}
						</ul>

						{/* CTA Button */}
						<Button
							variant='default'
							className='mt-12 bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8'>
							Create Resume For Free
						</Button>

						{/* Stats Section */}
						<StatsSection />
					</div>
				</div>
			</div>
		</section>
	);
}
