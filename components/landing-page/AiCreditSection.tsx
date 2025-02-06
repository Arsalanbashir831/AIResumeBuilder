"use client";

import { motion } from "framer-motion";
import { Coins } from "lucide-react";
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
		<section className='relative z-10 py-20 overflow-hidden'>
			{/* Floating Coins (background) */}
			<motion.div
				className='absolute top-[-40px] right-[-40px] w-28 h-28 pointer-events-none'
				initial={{ opacity: 0, scale: 0, rotate: 90 }}
				animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
				transition={{ duration: 1.5, ease: "easeInOut" }}>
				{/* Replace with your coin image */}
				<Coins className='w-full h-full object-contain' />
			</motion.div>

			<motion.div
				className='absolute bottom-[-50px] left-[-50px] w-36 h-36 pointer-events-none'
				initial={{ opacity: 0, scale: 0, rotate: -90 }}
				animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
				transition={{ duration: 1.5, ease: "easeInOut" }}>
				<Coins className='w-full h-full object-contain' />
			</motion.div>

			<div className='container px-6 md:px-12 mx-auto relative'>
				{/* Section Header */}
				<motion.h2
					className='text-4xl font-bold tracking-tight mb-4 text-slate-800'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					What are <span className='text-[#f97316]'>AI Credits?</span>
				</motion.h2>

				<motion.p
					className='text-lg max-w-2xl text-slate-700'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					Credits are like coins. You use them for AI Magic (like improving
					sections or generating new ones) and to download your resume.
				</motion.p>

				<motion.ul
					className='mt-6 space-y-4 text-base text-slate-700 list-none'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					<li className='flex items-start gap-2'>
						<div>
							<Coins className='text-[#f97316] mt-1' />
						</div>
						<span>1 Credit = 1,000 Tokens</span>
					</li>
					<li className='flex items-start gap-2'>
						<div>
							<Coins className='text-[#f97316] mt-1' />
						</div>
						<span>
							Small tasks, like improving a section using AI, may use 100 tokens
							and not a whole credit. Think of it like: <br />1 rupee = 1000
							paise (not in reality, of course).
						</span>
					</li>
					<li className='flex items-start gap-2'>
						<div>
							<Coins className='text-[#f97316] mt-1' />
						</div>
						<span>Every AI action = 100 paise.</span>
					</li>
					<li className='flex items-start gap-2'>
						<div>
							<Coins className='text-[#f97316] mt-1' />
						</div>
						<span>
							Imagine the flexibility you get with 20k paise (20 credits).
							Downloading resumes does not cost any credits; you can download as
							many resumes as you want (consider it a tax-free feature).
						</span>
					</li>
				</motion.ul>

				{/* Benefits Cards */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
					{aiCreditsFeatures.map((card, index) => (
						<motion.div
							key={index}
							className='relative'
							whileHover={{ scale: 1.05, y: -5 }}
							whileTap={{ scale: 0.95 }}>
							<Card className='border border-orange-500 rounded-2xl bg-white shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out overflow-hidden'>
								<div className='absolute top-0 left-0 w-full h-2 bg-orange-500'></div>
								<CardHeader>
									<CardTitle className='text-xl font-bold text-[#f97316]'>
										{card.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-slate-800 leading-relaxed'>
										{card.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
