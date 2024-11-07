"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Toggle background color based on scroll
			setIsScrolled(currentScrollY > 0);

			// Toggle navbar visibility based on scroll direction
			if (currentScrollY > lastScrollY) {
				// Scrolling down
				setShowNavbar(false);
			} else {
				// Scrolling up
				setShowNavbar(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${
				isScrolled ? "bg-[#FDF8F4] shadow-md" : "bg-transparent"
			} ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
			<div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>
				<div className='flex items-center gap-2'>
					<Image src='/logo.png' alt='GetSetCV' width={180} height={100} />
				</div>

				<div className='flex items-center gap-4'>
					<Button
						variant='outline'
						onClick={() => router.push("/signup")}
						className='px-4 font-medium'>
						Sign Up
					</Button>
					<Button
						onClick={() => router.push("/signin")}
						className='px-4 font-medium'>
						Sign In
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
