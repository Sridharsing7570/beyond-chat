import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Key, Send, X, Check, Code, ChevronRight } from "lucide-react";

const APIIntegrationPanel = ({ isOpen, onClose }) => {
    const [showCopiedMessage, setShowCopiedMessage] = useState("");
    const [activeTab, setActiveTab] = useState("authentication");

    const apiKey = "sk-beyond-chat-12345-example-key";
    const sampleCode = `const response = await fetch('https://api.beyondchat.ai/v1/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Hello!' }
    ],
    model: 'beyond-chat-v1'
  })
});

const data = await response.json();
console.log(data.message);`;

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setShowCopiedMessage(type);
        setTimeout(() => setShowCopiedMessage(""), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ right: "-500px" }}
                    animate={{ right: "20px" }}
                    exit={{ right: "-500px" }}
                    className="fixed top-20 w-[450px] bg-white rounded-xl shadow-2xl border border-gray-200"
                >
                    <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-xl flex justify-between items-center">
                        <div className="flex items-center space-x-2 text-white">
                            <Terminal size={20} />
                            <span className="font-medium">API Integration</span>
                        </div>
                        <button onClick={onClose} className="text-white hover:text-indigo-200">
                            <X size={18} />
                        </button>
                    </div>

                    <div className="h-[600px] flex flex-col">
                        {/* Tabs */}
                        <div className="flex border-b">
                            <button
                                onClick={() => setActiveTab("authentication")}
                                className={`flex-1 p-4 text-sm font-medium ${
                                    activeTab === "authentication"
                                        ? "border-b-2 border-indigo-600 text-indigo-600"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                Authentication
                            </button>
                            <button
                                onClick={() => setActiveTab("quickstart")}
                                className={`flex-1 p-4 text-sm font-medium ${
                                    activeTab === "quickstart"
                                        ? "border-b-2 border-indigo-600 text-indigo-600"
                                        : "text-gray-500 hover:text-gray-700"
                                }`}
                            >
                                Quickstart
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {activeTab === "authentication" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            API Keys
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Use this key to authenticate your API requests
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="relative">
                                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                                                <div className="flex items-center space-x-3">
                                                    <Key size={20} className="text-gray-400" />
                                                    <code className="text-sm">{apiKey}</code>
                                                </div>
                                                <button
                                                    onClick={() => copyToClipboard(apiKey, "key")}
                                                    className="text-gray-400 hover:text-indigo-600"
                                                >
                                                    {showCopiedMessage === "key" ? (
                                                        <Check
                                                            size={18}
                                                            className="text-green-500"
                                                        />
                                                    ) : (
                                                        <Copy size={18} />
                                                    )}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                                            <p className="text-sm text-amber-800">
                                                🔒 Keep your API key secure and never share it
                                                publicly
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "quickstart" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            Quick Start Guide
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Example code to get started with the API
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <div className="bg-gray-900 rounded-lg p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm text-gray-400">
                                                    JavaScript
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        copyToClipboard(sampleCode, "code")
                                                    }
                                                    className="text-gray-400 hover:text-white"
                                                >
                                                    {showCopiedMessage === "code" ? (
                                                        <Check
                                                            size={18}
                                                            className="text-green-500"
                                                        />
                                                    ) : (
                                                        <Copy size={18} />
                                                    )}
                                                </button>
                                            </div>
                                            <pre className="text-sm text-gray-100 overflow-x-auto">
                                                <code>{sampleCode}</code>
                                            </pre>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-medium text-gray-900">Next Steps</h4>
                                        <ul className="space-y-2">
                                            {[
                                                "Explore the full API documentation",
                                                "Test the API in our playground",
                                                "Join our Discord community",
                                            ].map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center space-x-2"
                                                >
                                                    <ChevronRight
                                                        size={16}
                                                        className="text-indigo-600"
                                                    />
                                                    <span className="text-sm text-gray-600">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t bg-gray-50">
                            <a
                                href="#"
                                className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center justify-center space-x-1"
                            >
                                <Code size={16} />
                                <span>View Full Documentation</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default APIIntegrationPanel;
