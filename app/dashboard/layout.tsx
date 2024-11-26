import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ColorProvider } from "@/context/ColorContext";
import { FormProvider } from "@/context/FormContext";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "GetSetCV",
	description: "Ready, Set Hired!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
			<AuthProvider>
				<Navbar isDashboard />
				<ColorProvider>
					<FormProvider>
						{/* Optional wrapper for dashboard styles */}
						<div className='dashboard-container '>{children}</div>
					</FormProvider>
				</ColorProvider>
			</AuthProvider>
			</body>
		</html>
	);
}
