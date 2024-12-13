import Navbar from '@/components/Navbar';
import React from 'react';

const TermsAndConditionsPage = () => {
    return (
        <>
            <Navbar />
           
            <div className="bg-white text-gray-800 min-h-screen mt-14">
                <div className="max-w-4xl mx-auto px-4 py-12">
                    <h1 className="text-3xl font-bold text-orange-600 mb-4">Terms and Conditions</h1>
                    <p className="text-lg mb-8">
                        Welcome to <span className="font-semibold">Get Set CV</span>! These terms and conditions outline the rules and
                        regulations for using the Get Set CV platform. By accessing this website and using our services, you accept
                        these terms in full.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Services</h2>
                        <p className="text-gray-700">
                            Get Set CV provides users with tools to create professional resumes, including customizable templates and
                            AI-powered enhancement features. Usage of the platform is subject to plan subscription and credit-based
                            actions, as defined in the pricing section.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">User Responsibilities</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-700">Users are responsible for maintaining the confidentiality of their account credentials.</li>
                            <li className="text-gray-700">The services provided are intended for personal use and must not be used for illegal purposes.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Prohibited Use</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li className="text-gray-700">Misuse of the website, including unauthorized access or reverse engineering, is strictly prohibited.</li>
                            <li className="text-gray-700">Any violation of terms may result in immediate account suspension without refund.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-orange-500 mb-3">Modifications</h2>
                        <p className="text-gray-700">
                            Get Set CV reserves the right to amend these terms at any time. Users will be notified of significant
                            changes via the website or email.
                        </p>
                    </section>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-500">
                            If you have any questions regarding these terms, please contact us at support@getsetcv.com.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditionsPage;