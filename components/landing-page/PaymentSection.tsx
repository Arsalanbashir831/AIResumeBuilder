import Link from "next/link";

export default function PaymentSection() {
	return (
		<section className='bg-[#0B1437] text-white relative overflow-hidden z-10'>
			<div className='absolute top-0 left-0 w-full'>
				<svg
					viewBox='0 0 1440 100'
					className='w-full h-auto transform rotate-180'
					preserveAspectRatio='none'>
					<path
						fill='#f3f4f6fc'
						d='M0,0 C320,100 480,100 720,50 C960,0 1120,0 1440,100 L1440,100 L0,100 Z'
					/>
				</svg>
			</div>

			<div className='max-w-3xl mx-auto space-y-4 px-4 pt-28 pb-16 text-center'>
				<div className='font-medium mb-2 text-sm uppercase tracking-wide text-gray-300'>
					One-Time Payment
				</div>

				<h2 className='text-3xl sm:text-4xl md:text-5xl mt-4 font-bold'>
					No subscriptions. No ads. Just a one-time payment.
				</h2>

				<p className='text-gray-300 mb-8 text-base sm:text-lg'>
					Enjoy lifetime access to all features with a simple, one-time fee. No
					recurring subscriptions, no hidden charges, and absolutely no ads. Get
					all the benefits of our AI-powered resume tools without the hassle.
				</p>

				<Link
					href='/signin'
					className='px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 text-sm rounded-full mt-6 inline-block'>
					Try for Free
				</Link>
			</div>
		</section>
	);
}
