"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

interface AuthFormProps {
  heading: string;
  description: string;
  buttonText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  heading,
  description,
  buttonText,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { login, register , isAuthenticated } = useAuth(); 

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isSignup = pathname.includes("signup");

  useEffect(()=>{
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  })

  const handleSubmit = async () => {
    setError(""); // Reset error state
    setLoading(true); // Start loading
    try {
      if (isSignup) {
        if (!name.trim()) {
          throw new Error("Name is required for signup.");
        }
        if (!email.includes("@")) {
          throw new Error("Invalid email format.");
        }
        await register(email, password, name);
        router.push("/signin"); 
      } else {
        await login(email, password); 
        router.push("/dashboard"); 
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-12">
      <Card className="w-full max-w-sm border-none shadow-none">
        <h2 className="text-2xl font-bold mb-4 text-center">{heading}</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">{description}</p>

        {/* Conditional field for name (only for signup) */}
        {isSignup && (
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full mb-4"
          />
        )}

        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
          className="w-full mb-4"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
          className="w-full mb-4"
        />

        {/* Error message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Submit button */}
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mb-4 text-white"
        >
          {loading ? "Please wait..." : buttonText}
        </Button>

        <div className="flex items-center justify-between mb-4">
          <span className="border-b border-gray-300 w-1/2" />
          <span className="px-2 text-gray-500 text-sm w-full text-center">
            OR CONTINUE WITH
          </span>
          <span className="border-b border-gray-300 w-1/2" />
        </div>

        <div className="flex flex-col items-center justify-between space-y-2 mb-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center border border-gray-300 text-[#0B1437]"
          >
            <Image src="/google-icon.svg" alt="Google" width={16} height={16} />
            <span className="ml-2">Google</span>
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center">
          By clicking continue, you agree to our{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </Card>
    </div>
  );
};

export default AuthForm;
