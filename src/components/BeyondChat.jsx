import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    User,
    Mail,
    Lock,
    MessageSquare,
    X,
    Check,
    Minimize2,
    Maximize2,
} from "lucide-react";
import OrganisationStep from "./OrganisationStep";
import IntegrationStep from "./IntegrationStep";
import googleLogo from "../assets/icons8-google-logo.svg";
import APIIntegrationPanel from "./APIIntegrationPanel";

const BeyondChat = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [showChatTest, setShowChatTest] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isMinimized, setIsMinimized] = useState(false);
    const [showAPIPanel, setShowAPIPanel] = useState(false);

    const sendMessage = () => {
        if (!inputMessage.trim()) return;

        setMessages([
            ...messages,
            {
                type: "user",
                content: inputMessage,
            },
        ]);
        setInputMessage("");

        // Simulate bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    type: "bot",
                    content:
                        "Thanks for your message! I'm a demo AI assistant. How can I help you today?",
                },
            ]);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="max-w-4xl mx-auto p-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Set up your AI Assistant
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Complete these steps to launch your chatbot
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 relative">
                    <StepIndicator currentStep={currentStep} />

                    <div className="mt-8">
                        {currentStep === 1 && <RegistrationStep onNext={() => setCurrentStep(2)} />}
                        {currentStep === 2 && <OrganisationStep onNext={() => setCurrentStep(3)} />}
                        {currentStep === 3 && (
                            <IntegrationStep
                                onShowChat={() => setShowChatTest(true)}
                                onShowApi={() => setShowAPIPanel(true)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Chat Test Interface */}
            <AnimatePresence>
                {showChatTest && (
                    <motion.div
                        initial={isMinimized ? { bottom: "-400px" } : { bottom: "20px" }}
                        animate={isMinimized ? { bottom: "-400px" } : { bottom: "20px" }}
                        exit={{ bottom: "-400px" }}
                        className="fixed right-4 w-96 bg-white rounded-t-xl shadow-2xl"
                    >
                        <div className="p-4 bg-indigo-600 rounded-t-xl flex justify-between items-center">
                            <div className="flex items-center space-x-2 text-white">
                                <MessageSquare size={20} />
                                <span className="font-medium">Test Chat</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-white hover:text-indigo-200"
                                >
                                    {isMinimized ? (
                                        <Maximize2 size={18} />
                                    ) : (
                                        <Minimize2 size={18} />
                                    )}
                                </button>
                                <button
                                    onClick={() => setShowChatTest(false)}
                                    className="text-white cursor-pointer hover:text-indigo-200"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="h-96 flex flex-col">
                            <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${
                                            message.type === "user"
                                                ? "justify-end"
                                                : "justify-start"
                                        }`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-lg ${
                                                message.type === "user"
                                                    ? "bg-indigo-600 text-white rounded-br-none"
                                                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                                            }`}
                                        >
                                            {message.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                                        placeholder="Type your message..."
                                        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            {/* <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl p-8 max-w-md w-full"
                        >
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="text-black cursor-pointer hover:text-indigo-200"
                            >
                                <X size={18} />
                            </button>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="text-white" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">All Set!</h3>
                                <p className="text-gray-600 mt-2">
                                    Your AI assistant is ready to help your customers
                                </p>
                            </div>

                            <div className="space-y-3 mt-6">
                                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-lg hover:opacity-90 transition-opacity">
                                    Go to Admin Panel
                                </button>
                                <button className="w-full border border-gray-200 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    View Live Chat
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence> */}

            {/* API Integration Panel */}
            <APIIntegrationPanel isOpen={showAPIPanel} onClose={() => setShowAPIPanel(false)} />
        </div>
    );
};

const StepIndicator = ({ currentStep }) => {
    const steps = [
        { number: 1, title: "Account" },
        { number: 2, title: "Organization" },
        { number: 3, title: "Integration" },
    ];

    return (
        <div className="flex justify-between relative">
            {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center flex-1">
                    <div
                        className={`
              w-10 h-10 rounded-full flex items-center justify-center
              transition-colors duration-300
              ${
                  step.number === currentStep
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                      : step.number < currentStep
                      ? "bg-gradient-to-r from-green-400 to-emerald-500 text-white"
                      : "bg-gray-100 text-gray-400"
              }
            `}
                    >
                        {step.number < currentStep ? <Check size={20} /> : step.number}
                    </div>
                    <div className="mt-2 text-sm font-medium text-gray-600">{step.title}</div>
                </div>
            ))}
        </div>
    );
};

// Other components remain similar but with updated styling to match new theme
const RegistrationStep = ({ onNext }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto space-y-6"
    >
        <div className="space-y-4">
            <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
            </div>
            <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
            </div>
            <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
            </div>
        </div>

        <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
        >
            Continue
        </button>

        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
            </div>
        </div>

        <button className="w-full border border-gray-200 p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
            <img src={googleLogo} alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
        </button>
    </motion.div>
);

export default BeyondChat;
