import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { ColorProvider } from "@/context/ColorContext";
import { FormProvider } from "@/context/FormContext";
import { AuthProvider } from "@/context/AuthContext";
import { SnapshotProvider } from "@/context/SnapShotContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
					<GoogleOAuthProvider clientId="73746778952-qhoc0oudn0fuqmta348dr2kabbha3nd7.apps.googleusercontent.com">
			<AuthProvider>
				<SnapshotProvider>
				<Navbar isDashboard />
				<ColorProvider>
					<FormProvider>
						{/* Optional wrapper for dashboard styles */}
						<div className='dashboard-container '>{children}</div>
					</FormProvider>
				</ColorProvider>
				</SnapshotProvider>
			</AuthProvider>
			</GoogleOAuthProvider>
			</body>
		</html>
	);
}
