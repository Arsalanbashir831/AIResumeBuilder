import Image from "next/image";
import Link from "next/link";

export default function OurStorySection() {
	return (
		<section className='max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
				{/* Right Side - Template Editor Interface */}
				<div className='relative z-10'>
					<Image
						src='/backgrounds/dots-grid.svg'
						alt='Dots Grid'
						width={100}
						height={100}
						className='absolute top-0 left-2 transform -translate-y-5 -z-10'
					/>
					<Image
						src='/our-story.png'
						alt='Our Story'
						width={600}
						height={400}
						className='w-full max-w-lg mx-auto'
					/>
					<Image
						src='/backgrounds/dots-grid-2.svg'
						alt='Dots Grid'
						width={100}
						height={100}
						className='absolute bottom-0 right-2 transform translate-y-5 -z-10'
					/>
				</div>

				{/* Left Side - Content */}
				<div>
					<h2 className='text-3xl sm:text-4xl md:text-5xl mt-4 mb-6 font-bold text-slate-800'>
						Our Story
					</h2>
					<p className='text-gray-600 mb-8 text-base sm:text-lg'>
						Get Set CV was born from the struggles we’ve all faced—talented
						individuals with big dreams missing out on opportunities, not
						because they lacked potential, but because of the lack of genuine,
						affordable platforms. Like many, we’ve spent hours searching for
						free templates, copying content into them, and trying to make it
						work because expensive subscriptions just didn’t make sense for
						something we’d use so rarely.That’s why we created Get Set CV—a
						place where you can build ATS-friendly resumes effortlessly, all in
						one place, completely free. Pay only when you’re comfortable.We
						might not be able to help you crack the interview, but we can help
						you tell your story in a way that makes sure you’re seen!
					</p>

					<Link
						href='/signin'
						className='px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 text-sm rounded-full'>
						Build Your Free Resume
					</Link>
				</div>
			</div>
		</section>
	);
}
