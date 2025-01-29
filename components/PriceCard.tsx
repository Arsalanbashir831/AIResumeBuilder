import { createPayments } from "@/app/api/payment";
import { BASE_URL } from "@/app/Constant";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useRazorpay } from "react-razorpay";

type Plan = {
  id: number;
  name: string;
  price: string;
  credits: number;
  is_addon: boolean;
  old_price?: string; // Optional old price field
};

interface PaymentCardProps {
  plans: Plan[];
}

const PaymentCard: React.FC<PaymentCardProps> = ({ plans }) => {
  const { Razorpay } = useRazorpay();

  // Dynamically append old_price for all plans
  const updatedPlans = plans.map((plan) => {
    // Add old_price for non-add-ons
    if (!plan.is_addon) {
      if (plan.id === 1) return { ...plan, old_price: "900.00" }; // Basic Plan
      if (plan.id === 2) return { ...plan, old_price: "1200.00" }; // Standard Plan
    }

    // Add old_price for add-ons
    if (plan.is_addon) {
      if (plan.id === 3) return { ...plan, old_price: "40.00" }; // Small Pack
      if (plan.id === 4) return { ...plan, old_price: "100.00" }; // Medium Pack
      if (plan.id === 5) return { ...plan, old_price: "200.00" }; // Large Pack
    }

    return plan;
  });

  const handlePayments = async (planId: number) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert("Please log in to proceed with payment.");
        return;
      }

      const paymentResponse = await createPayments(token, { plan_id: planId });
      const { razorpay_key, order_id, amount, currency, plan } = paymentResponse;

      const options = {
        key: razorpay_key,
        amount: amount * 100,
        currency,
        name: "GETSETCV",
        description: `Purchase ${plan.name}`,
        order_id,
        handler: async (paymentResult: any) => {
          console.log("Payment successful:", paymentResult);
          const verificationResponse = await fetch(
            `${BASE_URL}/api/payments/payment-callback/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                razorpay_order_id: paymentResult.razorpay_order_id,
                razorpay_payment_id: paymentResult.razorpay_payment_id,
                razorpay_signature: paymentResult.razorpay_signature,
              }),
            }
          );

          const verificationResult = await verificationResponse.json();
          alert(verificationResult.message);
        },
        prefill: {
          name: "John Doe",
          email: "user1@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#ff5f03",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-center gap-6">
        {updatedPlans.map((plan) => (
          <Card
            key={plan.id}
            className="w-full max-w-sm border shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
          >
            <CardHeader className="bg-gray-100 py-6">
              <CardTitle className="text-lg font-semibold text-center text-gray-800">
                {plan.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 flex-grow">
              <div className="text-3xl font-bold text-orange-600 flex flex-col items-center">
                {/* Display old price if available */}
                {plan.old_price && (
                  <p className="text-sm text-gray-500 line-through">
                    {plan.old_price}₹
                  </p>
                )}
                {/* Display new price */}
                <p>{plan.price}₹</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>One-time payment</li>
                <li>1 credit = 1k tokens</li>
                <li>{plan.credits} credits included</li>
                {plan.is_addon && <li>Addon available</li>}
              </ul>
            </CardContent>
            <CardFooter className="py-4">
              <Button
                onClick={() => handlePayments(plan.id)}
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition-all"
              >
                Choose {plan.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PaymentCard;
