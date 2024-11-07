"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const AnimatedLogos = () => {
	const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("opacity-100", "translate-x-0");
						observer.unobserve(entry.target); // Stop observing after animating
					}
				});
			},
			{ threshold: 0.1 } // Trigger when 10% of the element is visible
		);

		imageRefs.current.forEach((image) => {
			if (image) observer.observe(image);
		});

		return () => observer.disconnect(); // Cleanup observer on component unmount
	}, []);

	return (
		<div className='flex flex-wrap gap-4 items-center'>
			{[
				{ src: "/google.svg", alt: "Google", width: 70, height: 40 },
				{ src: "/facebook.svg", alt: "Facebook", width: 90, height: 40 },
				{ src: "/nasa.svg", alt: "NASA", width: 60, height: 40 },
				{ src: "/nike.svg", alt: "Nike", width: 50, height: 40 },
			].map((image, index) => (
				<div
					key={index}
					ref={(el) => {
						imageRefs.current[index] = el;
					}}
					className='opacity-0 transform -translate-x-10 transition duration-500 ease-in-out'>
					<Image
						src={image.src}
						alt={image.alt}
						width={image.width}
						height={image.height}
					/>
				</div>
			))}
		</div>
	);
};

export default AnimatedLogos;
