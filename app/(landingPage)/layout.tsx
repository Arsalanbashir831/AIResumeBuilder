export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className='bg-[#f3f4f6fc]'>{children}</div>;
}
