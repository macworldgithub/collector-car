"use client";
import React from "react";
const privacyPolicy = [
  {
    heading: "1. Introduction",
    content: [
      "We at Collector Car Depot are dedicated to safeguarding your privacy and ensuring your personal information is handled securely. This privacy notice explains how we collect, use, and process your personal data.",
      "In compliance with data protection laws, Collector Car Depot – office address: 1/68 Dilkera Ave Valentine NSW 2280 acts as the “data controller” responsible for managing your personal data.",
      "Please review this privacy notice alongside any other privacy or data-related notices we may provide when collecting or processing your data, ensuring you understand how and why your information is used. This document complements other notices and does not replace them.",
    ],
  },
  {
    heading: "2. Information We Collect",
    content: [
      "We may collect and process the following categories of personal data:",
      "2.1.1 Contact Information: Name, title, date of birth, email, phone number, and postal address, provided:",
      "(a) when completing forms on our website or interacting with its features;",
      "(b) during phone calls, emails, or in-person meetings, including at events or exhibitions.",
      "2.1.2 Financial Data: Payment details, such as bank account or credit card information, shared as part of contractual agreements.",
      "2.1.3 Transactional Data: Records of payments, purchases, and services acquired.",
      "2.1.4 Technical Data: Device and website usage details like IP address, browser type, and operating system, gathered via cookies and analytics tools.",
      "2.1.5 Profile Information: Usernames, preferences, feedback, survey responses, and usage habits related to our services.",
      "2.1.6 Marketing Preferences: Communication choices and marketing consent details.",
      "2.2 To ensure your data remains accurate and up-to-date, please notify us of any changes to your personal information.",
      "2.3 If you fail to provide required personal data, we may be unable to fulfill a contract or deliver a service, in which case we will notify you.",
    ],
  },
  {
    heading: "3. How We Use Your Data",
    content: [
      "We process your personal data only when legally permitted, primarily: For our legitimate interests (balanced with your rights). To fulfill contractual obligations. To meet legal requirements.",
      "Typical uses of your data include: Providing requested information, products, or services. Administering and improving our website and services. Fulfilling contractual commitments. Notifying you of service or price changes.",
      "Marketing communications will only be sent with your consent, or as part of a business relationship unless you opt out.",
      "You can withdraw marketing consent or manage preferences anytime by using unsubscribe links or contacting us directly.",
      "Cookies can be disabled via browser settings, but this may affect website functionality.",
      "If we need to process your data for reasons beyond its original purpose, we will inform you and explain the legal basis.",
    ],
  },
  {
    heading: "4. Data Sharing",
    content: [
      "Your personal data may be shared under specific circumstances, such as: To comply with legal obligations. With affiliates or service providers assisting in delivering our services. During business mergers, acquisitions, or restructuring.",
      "Third-party service providers are required to treat your data lawfully and only for approved purposes.",
    ],
  },
  {
    heading: "5. Data Security",
    content: [
      "We implement appropriate security measures to protect your personal data from unauthorized access, use, or loss.",
      "In the event of a data breach, we will notify all affected parties and relevant authorities as required by law.",
    ],
  },
  {
    heading: "6. Data Retention",
    content: [
      "Your personal data will only be retained as long as necessary for its original purpose or to meet legal requirements.",
      "We may anonymize data for research purposes, retaining it indefinitely in this format.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-10">
          {privacyPolicy.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3 text-sm md:text-base text-gray-700 leading-relaxed">
                {section.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
