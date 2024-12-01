'use client';

import React, { useEffect, useState } from "react";
import PaymentCard from "@/components/PriceCard";
import { getPlans } from "@/app/api/payment";
import {Plan} from '@/types/global'



const Plans: React.FC = () => {
  const [plans, setPlans] = useState<Plan[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      <h1 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading plans...</p>
      ) : plans && plans.length > 0 ? (
        <PaymentCard plans={plans} />
      ) : (
        <p className="text-center text-gray-600">No plans available at the moment.</p>
      )}
    </div>
  );
};

export default Plans;
