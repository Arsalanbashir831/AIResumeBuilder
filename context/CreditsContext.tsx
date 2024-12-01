"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { BASE_URL } from "@/app/Constant";

// Define the type for the subscription data
interface SubscriptionData {
  user: number;
  credits: number;
  tokens_used: number;
}

interface SubscriptionContextType {
  subscription: SubscriptionData | null;
  refreshSubscription: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

interface SubscriptionProviderProps {
  children: ReactNode;
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({ children }) => {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);

  const refreshSubscription = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("User is not authenticated.");
      }

      const response = await axios.get<SubscriptionData>(`${BASE_URL}/api/payments/credits/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      setSubscription(response.data);
    } catch (error) {
      console.error("Failed to fetch subscription:", error);
      setSubscription(null);
    }
  };

  return (
    <SubscriptionContext.Provider
      value={{
        subscription,
        refreshSubscription,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptionContext = (): SubscriptionContextType => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscriptionContext must be used within a SubscriptionProvider");
  }
  return context;
};
