"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function AiCreditSection() {
	const aiCreditsFeatures = [
		{
			title: "Free Trial, No Strings Attached",
			description:
				"Sign up and get 2 free credits—enough to create and download up to 5 resumes! No questions asked.",
		},
		{
			title: "Affordable Top-Ups",
			description:
				"Run out of credits? No worries! Get a top-up for as low as ₹30 and keep crafting your perfect resume.",
		},
		{
			title: "Simple & Transparent",
			description:
				"No hidden fees, no confusion. Pay only for what you need and upgrade when you're ready!",
		},
	];

	return (
		<section className='py-20 relative z-10'>
			<div className='container px-6 md:px-12 mx-auto'>
				{/* Section Header */}
				<motion.h2
					className='text-4xl font-bold tracking-tight mb-4'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					What are <span className='text-[#f97316]'>AI Credits?</span>
				</motion.h2>

				<motion.p
					className='text-lg max-w-2xl'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					Credits are like coins. You use them for AI Magic (like improving
					sections or generating new ones) and to download your resume.
				</motion.p>

				<motion.ul
					className='mt-6 space-y-2 text-base'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					<li>1 Credit = 1,000 Tokens</li>
					<li>
						Small tasks, like improving a section using AI, may use 100 tokens
						and not a whole credit. Think of it like:
						<br />1 rupee = 100 paise (not in reality, of course).
					</li>
					<li>Every AI action = 100 paise.</li>
					<li>
						Imagine the flexibility you get with 20k paise (20 credits).
						Downloading resumes does not cost any credits; you can download as
						many resumes as you want (consider it a tax-free feature).
					</li>
				</motion.ul>

				{/* Benefits Cards */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
					{aiCreditsFeatures.map((card, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<Card className='border border-[#f97316] shadow-md rounded-xl transition'>
								<CardHeader>
									<CardTitle className='text-xl font-bold text-[#f97316]'>
										{card.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className=''>{card.description}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
