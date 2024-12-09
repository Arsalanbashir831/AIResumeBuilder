"use client";

import React, { useEffect, useState } from "react";
import PaymentCard from "@/components/PriceCard";
import { getPlans } from "@/app/api/payment";
import { Plan } from "@/types/global";

const Plans: React.FC = () => {
  const [plans, setPlans] = useState<Plan[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Top-up packages
  const topUpCredits = [
    { name: "Small Pack", credits: 4, price: 40 },
    { name: "Medium Pack", credits: 10, price: 100 },
    { name: "Large Pack", credits: 20, price: 200 },
  ];

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getPlans();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
   
   {/* Add-On Credits Section */}
   <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Add-On Credits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topUpCredits.map((pack, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold mb-2">{pack.name}</h3>
              <p className="text-gray-600 mb-2">
                {pack.credits} credits for ₹{pack.price}
              </p>
              <p className="text-gray-500 text-sm">
                (₹{(pack.price / pack.credits).toFixed(2)} per credit)
              </p>
              {/* <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                onClick={() => console.log(`Top-up ${pack.name} selected`)}
              >
                Buy Now
              </button> */}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-10 border-gray-300" />
      <h1 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading plans...</p>
      ) : plans && plans.length > 0 ? (
        <PaymentCard plans={plans} />
      ) : (
        <p className="text-center text-gray-600">No plans available at the moment.</p>
      )}

      
   

      <hr className="my-10 border-gray-300" />

      {/* What is a Credit Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">What is a Credit?</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          A credit is a unit used to customize specific sections of your resume
          with AI. Each section—such as <strong>Work Experience</strong>,{" "}
          <strong>Summary</strong>, or <strong>Achievements</strong>—requires a
          certain number of credits to generate or enhance.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          For example, generating a <strong>Work Experience</strong> section
          costs 1 credit. Clicking on “Improve with AI” for any section will
          deduct the necessary credits from your account.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          This transparent system ensures you only pay for the features you use,
          giving you complete control over your customization process.
        </p>
      </div>
    </div>
  );
};

export default Plans;
