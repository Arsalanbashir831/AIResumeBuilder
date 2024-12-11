import { AuthProvider } from "@/context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<GoogleOAuthProvider clientId="73746778952-qhoc0oudn0fuqmta348dr2kabbha3nd7.apps.googleusercontent.com">

<AuthProvider >
   
    {children}
</AuthProvider>
		</GoogleOAuthProvider>
	);
}