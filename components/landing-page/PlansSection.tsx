"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function PlansSection() {
	const plans = [
		{
			title: "Basic Plan",
			oldPrice: "₹250/20",
			newPrice: "₹250/20 Credits",
			description:
				"More than sufficient to create minimum 50 resumes hassle-free",
		},
		{
			title: "Standard Plan",
			oldPrice: "₹350/25",
			newPrice: "₹350/25 Credits",
			description:
				"More than sufficient to create minimum 100 resumes hassle-free",
		},
	];

	return (
		<section className='py-16 relative z-10 '>
			<div className='container px-4 md:px-6 mx-auto text-center'>
				{/* Section Header */}
				<h2 className='text-4xl font-bold'>
					What Do You Get When You{" "}
					<span className='text-orange-500'>Buy a Plan?</span>
				</h2>
				<p className='text-gray-600 mt-4 max-w-lg mx-auto'>
					Choose the perfect plan and get everything you need to create
					professional resumes—simple, affordable, and hassle-free!
				</p>

				{/* Plans Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-4xl mx-auto'>
					{plans.map((plan, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
							viewport={{ once: true }}
							className='relative'>
							<Card className='border border-orange-500 rounded-2xl bg-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out md:p-6 overflow-hidden'>
								<div className='absolute top-0 left-0 w-full h-2 bg-orange-500'></div>
								<CardHeader className='pb-4'>
									<CardTitle className='flex flex-col md:flex-row justify-between md:items-end text-gray-900 gap-2'>
										<div className='text-2xl font-bold text-orange-600'>
											{plan.title}
										</div>
										<div className='flex flex-col items-center text-left'>
											<span className='font-medium text-sm line-through text-gray-400'>
												{plan.oldPrice}
											</span>
											<span className='font-bold text-xl text-gray-900'>
												{plan.newPrice}
											</span>
										</div>
									</CardTitle>
								</CardHeader>
								<CardContent className='text-center'>
									<p className='text-md text-gray-600'>{plan.description}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
