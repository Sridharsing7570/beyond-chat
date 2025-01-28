import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AtSign,
  Lock,
  User,
  Globe,
  Building,
  FileText,
  ChevronRight,
  Check,
  Code,
  Mail,
  Share2,
  MessageSquare,
  Settings,
  AlertTriangle,
} from "lucide-react";

const BeyondChat = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [webpages, setWebpages] = useState([
    {
      url: "/about",
      status: "scraped",
      chunks: ["About our company...", "Our mission..."],
    },
    { url: "/products", status: "pending", chunks: [] },
    { url: "/contact", status: "scraping", chunks: [] },
  ]);

  const steps = [
    "User Registration",
    "Setup Organisation",
    "Integration & Testing",
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const renderProgressBar = () => (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-1/3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep > index + 1
                  ? "bg-green-500"
                  : currentStep === index + 1
                  ? "bg-blue-500"
                  : "bg-gray-300"
              } text-white mb-2`}
            >
              {currentStep > index + 1 ? <Check size={16} /> : index + 1}
            </div>
            <span className="text-sm text-center hidden md:block">{step}</span>
          </div>
        ))}
      </div>
      <div className="relative w-full bg-gray-200 h-2 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );

  const renderRegistrationForm = () => (
    <motion.div {...fadeIn} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <AtSign className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => setCurrentStep(2)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Continue</span>
          <ChevronRight size={20} />
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
          <img src="/api/placeholder/20/20" alt="Google" className="w-5 h-5" />
          <span>Google</span>
        </button>
      </div>
    </motion.div>
  );

  const renderOrganizationSetup = () => (
    <motion.div {...fadeIn} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Setup Your Organisation</h2>
      <div className="space-y-4">
        <div className="relative">
          <Building className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <Globe className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="url"
            placeholder="Company Website URL"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
          <textarea
            placeholder="Company Description"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-4">Website Scraping Status</h3>
          <div className="space-y-2">
            {webpages.map((page, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-white rounded-lg shadow-sm"
              >
                <span>{page.url}</span>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    page.status === "scraped"
                      ? "bg-green-100 text-green-800"
                      : page.status === "scraping"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {page.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setCurrentStep(3)}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Continue</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderIntegrationTesting = () => (
    <motion.div {...fadeIn} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Integration & Testing</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <button
          className="p-6 border rounded-lg hover:bg-gray-50 transition-all text-left space-y-2"
          onClick={() => setShowSuccess(true)}
        >
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <MessageSquare className="text-blue-500" />
            <span>Test Chatbot</span>
          </div>
          <p className="text-gray-600 text-sm">
            Preview your chatbot in action on a demo website
          </p>
        </button>

        <button className="p-6 border rounded-lg hover:bg-gray-50 transition-all text-left space-y-2">
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <Code className="text-blue-500" />
            <span>Integration Code</span>
          </div>
          <p className="text-gray-600 text-sm">
            Get the code snippet to add to your website
          </p>
        </button>

        <button className="p-6 border rounded-lg hover:bg-gray-50 transition-all text-left space-y-2">
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <Mail className="text-blue-500" />
            <span>Email Instructions</span>
          </div>
          <p className="text-gray-600 text-sm">
            Send integration instructions to your developer
          </p>
        </button>

        <button className="p-6 border rounded-lg hover:bg-gray-50 transition-all text-left space-y-2">
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <AlertTriangle className="text-blue-500" />
            <span>Test Integration</span>
          </div>
          <p className="text-gray-600 text-sm">
            Verify if the chatbot is properly integrated
          </p>
        </button>
      </div>

      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Integration Successful!
              </h3>
              <p className="text-gray-600">Your chatbot is now ready to use</p>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                <Settings size={20} />
                <span>Explore Admin Panel</span>
              </button>

              <button className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <MessageSquare size={20} />
                <span>Start Talking to Your Chatbot</span>
              </button>

              <div className="flex justify-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        {renderProgressBar()}

        {currentStep === 1 && renderRegistrationForm()}
        {currentStep === 2 && renderOrganizationSetup()}
        {currentStep === 3 && renderIntegrationTesting()}
      </div>
    </div>
  );
};

export default BeyondChat;

