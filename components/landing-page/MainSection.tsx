import Link from "next/link";
import FocusedCarousel from "./FocusedCarousel";

export default function MainSection() {
	return (
		<section className='max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10'>
			<div className='grid md:grid-cols-2 gap-12 items-center'>
				<div className='flex flex-col items-start md:justify-between h-full gap-6 md:gap-12 order-last md:order-first'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold md:mb-10'>
						You can always pick any template you like
					</h2>
					<p className='text-gray-600 text-base sm:text-lg'>
						Nike, Facebook — learn from resumes that helped our customers land
						jobs with the world's top companies. Explore 5 high-quality
						templates, each crafted from scratch to ensure maximum visibility.
						We prioritize the best quality, and more templates will be added
						soon!
					</p>

					<Link
						href='/signin'
						className='px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 text-sm rounded-full'>
						Get Your's For Free
					</Link>
				</div>

				<div className='order-first md:order-last flex justify-center md:justify-start w-full overflow-hidden'>
					<FocusedCarousel />
				</div>
			</div>
		</section>
	);
}
