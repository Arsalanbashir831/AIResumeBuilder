"use client";

import { motion } from "framer-motion";

const logos = [
	{
		name: "Amazon",
		url: "./logos/amazon.svg",
	},
	{
		name: "Oracle",
		url: "./logos/oracle.svg",
	},
	{
		name: "Accenture",
		url: "./logos/accenture.svg",
	},
	{
		name: "Nike",
		url: "./logos/nike.svg",
	},
	{
		name: "Infosys",
		url: "./logos/infosys.svg",
	},
	{
		name: "Google",
		url: "./logos/google.svg",
	},
	{
		name: "cognizant",
		url: "./logos/cognizant.svg",
	},
	{
		name: "zomato",
		url: "./logos/zomato.svg",
	},
	{
		name: "TCS",
		url: "./logos/tcs.svg",
	},
	{
		name: "Walmart",
		url: "./logos/walmart.svg",
	},
	{
		name: "Amazon",
		url: "./logos/amazon.svg",
	},
];

export default function LogoSlider() {
	return (
		<div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)] md:before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)] md:after:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_100%)] after:content-['']">
			<div className='flex items-center justify-center'>
				<h2 className='mb-6 text-center font-bold text-xl md:text-3xl px-4 text-slate-800'>
					Trusted by thousands of{" "}
					<span className='text-orange-500'>job seekers</span> and still
					growing.
				</h2>
			</div>

			<div className='relative m-auto w-full overflow-hidden py-10'>
				<motion.div
					className='flex w-full'
					animate={{
						x: [0, -1035],
					}}
					transition={{
						x: {
							repeat: Number.POSITIVE_INFINITY,
							repeatType: "loop",
							duration: 20,
							ease: "linear",
						},
					}}>
					{/* First set of logos */}
					<div className='flex gap-16 px-8'>
						{logos.map((logo, idx) => (
							<div
								key={idx}
								className='flex w-24 md:w-[200px] items-center justify-center'>
								<img width={150} height={150}
									src={logo.url || "/placeholder.svg"}
									alt={`${logo.name} logo`}
									className='h-10 md:h-[100px] w-auto object-contain'
								/>
							</div>
						))}
					</div>

					{/* Duplicate set of logos for seamless loop */}
					<div className='flex gap-16 px-8'>
						{logos.map((logo, idx) => (
							<div
								key={`duplicate-${idx}`}
								className='flex w-[200px] items-center justify-center'>
								<img
									src={logo.url || "/placeholder.svg"}
									alt={`${logo.name} logo`}
									className='h-[45px] w-auto object-contain'
								/>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
