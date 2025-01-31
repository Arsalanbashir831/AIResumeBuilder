import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className='max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
				<div className='mt-10 md:mt-0 max-w-xl'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6'>
						India's Own AI-Powered{" "}
						<span className='text-orange-500'>Resume Builder</span>
					</h1>
					<p className='text-gray-600 text-base sm:text-lg mb-8'>
						Build your perfect resume effortlessly with the power of Artificial
						Intelligence and beautifully customizable templates. Get that first
						interview with a professionally crafted resume tailored just for
						you.
					</p>

					<Link
						href='/signin'
						className='px-6 sm:px-12 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white'>
						Create Your First Resume For Free
					</Link>
				</div>

				<div className='flex justify-center mt-12 md:mt-0 z-10'>
					<Image
						src='/placeholder-dashboard.svg'
						alt='Hero'
						className='shadow-xl rounded-lg w-full max-w-xs sm:max-w-md md:max-w-full'
						width={400}
						height={200}
					/>
				</div>
			</div>
		</section>
	);
}
