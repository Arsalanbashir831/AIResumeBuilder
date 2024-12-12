"use client";

import React, { useEffect, useState } from "react";
import PaymentCard from "@/components/PriceCard";
import { getPlans } from "@/app/api/payment";
import { Plan } from "@/types/global";

const Plans: React.FC = () => {
  const [plans, setPlans] = useState<Plan[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [addons, setAddons] = useState<Plan[] | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const data = await getPlans(token);

        // Separate add-ons from standard plans
        const addonPlans = data.filter(
          (plan: Plan) => plan.is_addon === true && [3, 4, 5].includes(plan.id)
        );

        setPlans(data);
        setAddons(addonPlans.length > 0 ? addonPlans : null);
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
        {/* <h2 className="text-2xl font-bold mb-6">Add-On Credits</h2> */}
        {addons ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
          </div>
        ) : (
          <p className="text-gray-600">
            Purchase one of the standard plans to unlock add-on credits.
          </p>
        )}
      </div>

      <h1 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading plans...</p>
      ) : plans && plans.length > 0 ? (
        <PaymentCard plans={plans} />
      ) : (
        <p className="text-center text-gray-600">
          No plans available at the moment.
        </p>
      )}

      <hr className="my-10 border-gray-300" />

      {/* What is a Credit Section */}
      <div className="max-w-full mx-auto  shadow-lg rounded-xl p-8">
  <h2 className="text-4xl font-bold mb-6 text-center text-orange-700 drop-shadow-md">
    What is a Credit?
  </h2>
  <p className="text-gray-800 text-lg leading-relaxed mb-6">
    Credits measure the AI customization features you use to create and refine your resumes. Each AI action—like generating a 
    <strong> Work Experience</strong> section or enhancing your <strong>Summary</strong>—uses a small number of tokens, 
    which are deducted from your credits.
  </p>

  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How It Works:</h3>
  <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-4">
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">&#x1F4B3;</span>
      <strong>1 Credit = 1,000 Tokens:</strong> Most AI actions use only a fraction of this amount.
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">&#x2705;</span>
      <strong>No Immediate Deductions:</strong> If the tokens used are below the threshold, your credit balance won’t 
      decrease right away.
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">&#x1F4AF;</span>
      <strong>Generous Usage:</strong> Our credits are designed to last, letting you create or refine multiple 
      resumes without quickly running out.
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">&#x1F4B8;</span>
      <strong>Simple and Fair:</strong> You only pay for what you use, ensuring cost efficiency.
    </li>
  </ul>
  <div className="bg-orange-100 p-6 rounded-lg mb-6 mt-4 shadow-inner">
    <p className="text-gray-900 text-lg leading-relaxed">
      <strong>Example:</strong> Generating a <strong>Work Experience</strong> section costs 1 credit. Clicking on 
      "Improve with AI" for any section deducts the required credits instantly.
    </p>
  </div>
  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
    <p className="text-gray-700 text-lg leading-relaxed">
      <strong>Even More Flexibility!</strong> After purchasing a plan, you’ll have access to exclusive add-ons directly 
      within your account. These optional add-ons allow you to purchase additional credits or features, ensuring you 
      always have the resources you need to build your best resume.
    </p>
  </div>
  <p className="text-gray-700 text-lg leading-relaxed mt-6">
    Experiment with AI-powered resume creation freely—we’ve got you covered!
  </p>
 
</div>


    </div>
  );
};

export default Plans;
