import Navbar from '@/components/Navbar';
import React from 'react';

const RefundCancellationPolicyPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white text-gray-800 min-h-screen mt-16">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-3xl font-bold text-orange-600 mb-4">Refund and Cancellation Policy</h1>
                    <p className="text-lg mb-8">
                        At <span className="font-semibold">Get Set CV</span>, your satisfaction is our priority.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Refund Eligibility</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-700">Refunds are applicable only for unused credits purchased within 7 days of the transaction.</li>
                            <li className="text-gray-700">Refund requests must be submitted via email to support@getsetcv.com.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Refund Process</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-700">Upon approval, refunds will be processed within 5-7 working days and credited back to the original payment method.</li>
                            <li className="text-gray-700">Non-refundable items include credits used or partially consumed plans.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Cancellation</h2>
                        <p className="text-gray-700">
                            Users may cancel subscriptions at any time. Cancellation does not automatically qualify for a refund unless stated under the refund eligibility criteria.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Contact Us</h2>
                        <p className="text-gray-700">
                            For any assistance, feel free to reach out:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-700">Email: support@getsetcv.com</li>
                            <li className="text-gray-700">Phone: +91-9720631334</li>
                            <li className="text-gray-700">Address: A1-705, C.A Apartments, Paschim Vihar, New Delhi, 110063, India</li>
                        </ul>
                    </section>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-500">
                            For further details or clarifications, feel free to contact us.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RefundCancellationPolicyPage;
