"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { useSubscriptionContext } from "@/context/CreditsContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = ({ isDashboard = false }: { isDashboard?: boolean }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const { logout, isAuthenticated, user } = useAuth();
	const { subscription, refreshSubscription } = useSubscriptionContext();

	const router = useRouter();
	const credits = subscription?.credits ?? 0;

	useEffect(() => {
		refreshSubscription();
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			setIsScrolled(currentScrollY > 0);

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
			<div className='container mx-auto flex items-center justify-between px-4 py-3'>
				{/* Logo */}
				<div className='flex items-center gap-2 cursor-pointer'>
					<Image
						onClick={() => {
							router.push(`${isAuthenticated ? "/dashboard" : "/"}`);
						}}
						src='/logo.png'
						alt='GetSetCV'
						width={220}
						height={100}
					/>
				</div>

				{/* Navigation Content */}
				{isDashboard ? (
					<div className='flex items-center gap-6'>
						{/* Credits and Tokens Display */}
						<div className='flex flex-col items-end text-sm font-medium text-gray-600'>
							<span>
								Credits: <strong>{credits}</strong>
							</span>
							{/* <span>
                Tokens Used: <strong>{tokensUsed}</strong>
              </span> */}
						</div>

						{/* User Dropdown */}
						<DropdownMenu>
							<DropdownMenuTrigger>
								<div className='flex items-center gap-3'>
									<h1 className='text-sm font-medium'>{user?.name}</h1>
									<Avatar className='cursor-pointer'>
										<AvatarImage src='/avatar.jpg' alt='Avatar' />
										<AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
									</Avatar>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem
									onClick={() => router.push("/dashboard")}
									className='cursor-pointer'>
									Dashboard
								</DropdownMenuItem>
								<DropdownMenuItem
									onClick={() => router.push("/dashboard/plans")}
									className='cursor-pointer'>
									Pricing
								</DropdownMenuItem>
								<DropdownMenuItem
									className='cursor-pointer'
									onClick={() => {
										logout();
									}}>
									Logout
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				) : (
					<div className='flex items-center gap-2 md:gap-4'>
						{isAuthenticated ? (
							<Button
								onClick={() => router.push("/dashboard")}
								className='px-4 font-medium'>
								Dashboard
							</Button>
						) : (
							<>
								<Button
									variant='outline'
									onClick={() => router.push("/signup")}
									className='px-6 md:px-8 border-none font-medium rounded-full shadow-md shadow-[#FFD7C0]'>
									Sign Up
								</Button>
								<Button
									onClick={() => router.push("/signin")}
									className='px-6 md:px-8 border-none font-medium rounded-full shadow-md shadow-[#CDCDCD]'>
									Sign In
								</Button>
							</>
						)}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
