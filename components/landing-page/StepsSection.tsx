"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Card, CardContent } from "../ui/card";

export default function StepsSection() {
	const steps = [
		{
			number: 1,
			title: "Pick a Template",
			description: "Fill in the blanks and see results in real-time.",
		},
		{
			number: 2,
			title: "Generate Your Content using AI",
			description: "Use AI to improve your content which will be ATS friendly ",
		},
		{
			number: 3,
			title: "Hit 'Download!'",
			description: "Download your resume, apply, get more interviews.",
		},
	];

	return (
		<section className='py-16 relative z-10'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-3xl font-bold text-center mb-12 text-slate-800'>
					Build Your
					<span className='text-orange-500'> Resume </span>
					In 3 Steps
				</h2>
				<div className='flex flex-col gap-8 max-w-6xl mx-auto'>
					{steps.map((step, index) => {
						const ref = useRef(null);
						const isInView = useInView(ref, { once: true, margin: "-200px" });

						return (
							<motion.div
								key={index}
								ref={ref}
								initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 20,
									delay: 0.2 + index * 0.2,
								}}
								className={cn("relative w-fit", index % 2 !== 0 && "self-end")}>
								<Card className='border-none'>
									<CardContent className='p-6 flex flex-col md:flex-row items-center space-x-6'>
										<div className='mb-4 md:mb-0'>
											<Image
												src={`/steps/step-${step.number}.svg`}
												alt={`Step ${step.number} illustration`}
												width={220}
												height={220}
												className='mx-auto'
											/>
										</div>
										<div className='flex items-end space-x-4'>
											<div className='text-orange-500 font-bold text-5xl'>
												{step.number}.
											</div>
											<div>
												<h3 className='font-bold text-xl text-orange-500'>
													{step.title}
												</h3>
												<p className='text-sm text-orange-400 -mt-1'>
													{step.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
