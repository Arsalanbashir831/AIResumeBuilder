"use client"; // Ensure it runs only on the client side

import React from "react";
import Lottie from "lottie-react";
import animationData from "@/public/congrats_anime.json"; // Correct import
import { Button } from "@/components/ui/button"; // ShadCN UI
import { useRouter } from "next/navigation";

const Onboarding = () => {
const router = useRouter()
    return (
    <div className="relative flex h-screen w-full items-center justify-center bg-gray-100">
      {/* Lottie Background Animation */}
      <Lottie
        animationData={animationData}
        loop
        autoPlay
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      {/* Welcome Content */}
      <div className="relative z-10 flex flex-col items-center  backdrop-blur-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4 text-center">
          🎉 Welcome to GETSETCV! 🎉
        </h1>
        <p className="text-gray-700 text-lg mb-5 text-center">
          We're excited to have you join us. Let's build something amazing together!
        </p>
        <Button onClick={()=>{router.push('/signin')}} className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-lg">
      Signin to create your resume
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
