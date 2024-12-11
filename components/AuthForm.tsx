"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { BASE_URL } from "@/app/Constant";

import VerificationModal from "./modals/VerificationModal";

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
  const { login, register, isAuthenticated } = useAuth();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isForgetPasswordOpen, setForgetPasswordOpen] = useState(false);
  const [modalType, setModalType] = useState<"register" | "forget password">("register");
  const isSignup = pathname.includes("signup");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  });

  const handleSubmit = async () => {
    setError("");
    setLoading(true); 
    try {
      if (isSignup) {
        if (!name.trim()) {
          throw new Error("Name is required for signup.");
        }
        if (!email.includes("@")) {
          throw new Error("Invalid email format.");
        }
        await register(email, password, name);
        setModalType('register')
        setForgetPasswordOpen(true)
      } else {
        await login(email, password)
      }
    } catch (err: any) {
      console.log('err',err);
      
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  const handleGoogleLoginSuccess = async (response: any) => {
    try {
      setLoading(true);
  
      const res = await fetch(`${BASE_URL}/api/users/google-auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id_token: response.credential }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        console.log("Login Successful:", data);
        localStorage.setItem('accessToken',data.access);
        localStorage.setItem('refreshToken',data.refresh);
         router.push("/dashboard");
      } else {
        console.error("Backend Error:", data.error);
        throw new Error(data.error || "Google Login failed");
      }
    } catch (err: any) {
      console.error("Error:", err.message || "Google Login failed");
      setError(err.message || "Google Login failed");
    } finally {
      setLoading(false);
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
          className={`w-full ${isSignup?'mb-4':'mb-0'}`}
        />
        {!isSignup &&(<>
          <div className="w-full text-right">
          <Button className="" variant={'link'} onClick={() => {
            setModalType('forget password')
            console.log(modalType);
            
            setForgetPasswordOpen(true)}}>
        Forgot Password?
      </Button>
      </div>
        </>)}
       
      {isForgetPasswordOpen && (
        <VerificationModal type={modalType} 
        registerEmail={email}
        initialStep={1}
        onClose={() => setForgetPasswordOpen(false)}
        />
      )}

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
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={() => setError("Google Login failed")}
          />
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
