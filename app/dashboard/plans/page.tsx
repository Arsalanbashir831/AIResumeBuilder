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
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
  <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">What is a Credit?</h2>
  <p className="text-gray-700 text-lg leading-relaxed mb-6">
    Credits measure the AI customization features you use for your resume. Each AI action—such as generating a 
    <strong>Work Experience</strong> section or improving your <strong>Summary</strong>—uses a small number of tokens, 
    which are deducted from your credits.
  </p>
  <div className="bg-gray-100 p-4 rounded-lg mb-6">
    <p className="text-gray-700 text-lg leading-relaxed">
      <strong>Example:</strong> Generating a <strong>Work Experience</strong> section costs 1 credit. Clicking on 
      "Improve with AI" for any section deducts the necessary credits from your account.
    </p>
  </div>
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Here’s What You Need to Know:</h3>
  <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed space-y-3">
    <li>
      <strong>1 Credit = 1,000 Tokens:</strong> Most AI actions use only a fraction of this amount.
    </li>
    <li>
      <strong>No Immediate Deductions:</strong> If the tokens used are below the threshold, your credit balance won’t 
      decrease immediately.
    </li>
    <li>
      <strong>Generous Usage:</strong> Our credits are designed to be generous, letting you create or refine multiple 
      resumes without worrying about running out quickly.
    </li>
    <li>
      <strong>Simple and Fair:</strong> You only pay for what you use, ensuring cost efficiency.
    </li>
  </ul>
  <p className="text-gray-700 text-lg leading-relaxed mt-6">
    Experiment with AI and customize your resume without worrying about the numbers—we’ve got you covered!
  </p>
</div>

    </div>
  );
};

export default Plans;
