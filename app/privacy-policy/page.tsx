import Navbar from '@/components/Navbar';
import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white text-gray-800 min-h-screen mt-16">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-3xl font-bold text-orange-600 mb-4">Privacy Policy</h1>
                    <p className="text-lg mb-8">
                        At <span className="font-semibold">Get Set CV</span>, we are committed to safeguarding your privacy. This
                        Privacy Policy explains how we collect, use, and protect your information.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Data Collection</h2>
                        <p className="text-gray-700">
                            We collect the following user information during registration and usage:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-700">Name, email, and contact information.</li>
                            <li className="text-gray-700">Usage data for analytics to improve the platform.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Data Usage</h2>
                        <p className="text-gray-700">
                            Your information is used to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-700">Provide and enhance our services.</li>
                            <li className="text-gray-700">Communicate updates or promotional offers.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Data Protection</h2>
                        <p className="text-gray-700">
                            We implement robust measures to protect your data. Access to your information is restricted to authorized
                            personnel only.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Third-Party Sharing</h2>
                        <p className="text-gray-700">
                            We do not share or sell your data to third parties. Exceptions are made for legal compliance or essential
                            service integrations.
                        </p>
                    </section>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-500">
                            For any queries or to request data removal, contact us at support@getsetcv.com.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicyPage;
