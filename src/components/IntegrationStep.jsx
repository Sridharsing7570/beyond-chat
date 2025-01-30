// import { motion } from "framer-motion";
// import { Code, Settings, Share2, AlertCircle, ChevronRight } from "lucide-react";

// const IntegrationStep = ({ onShowChat, onSuccess, onShowApi }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-md mx-auto space-y-6"
//         >
//             {/* Integration Options */}
//             <div className="space-y-4">
//                 <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
//                     <h3 className="font-medium text-indigo-900 flex items-center gap-2">
//                         <Settings size={20} />
//                         Configure Your Assistant
//                     </h3>
//                     <p className="mt-1 text-sm text-indigo-700">
//                         Choose how you want to integrate the AI assistant with your platform
//                     </p>
//                 </div>

//                 {/* Integration Methods */}
//                 <div className="space-y-3">
//                     {/* Website Widget */}
//                     <button
//                         className="w-full p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors group"
//                         onClick={() => {
//                             onShowChat();
//                             setTimeout(onSuccess, 2000);
//                         }}
//                     >
//                         <div className="flex justify-between items-center">
//                             <div className="flex items-center gap-3">
//                                 <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
//                                     <Code size={20} />
//                                 </div>
//                                 <div className="text-left">
//                                     <h4 className="font-medium text-gray-900">Test chatbot</h4>
//                                     <p className="text-sm text-gray-500">
//                                         Add chat to your website
//                                     </p>
//                                 </div>
//                             </div>
//                             <ChevronRight
//                                 className="text-gray-400 group-hover:text-indigo-500"
//                                 size={20}
//                             />
//                         </div>
//                     </button>

//                     {/* API Integration */}
//                     <button
//                         className="w-full p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors group"
//                         onClick={onShowApi}
//                     >
//                         <div className="flex justify-between items-center">
//                             <div className="flex items-center gap-3">
//                                 <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
//                                     <Share2 size={20} />
//                                 </div>
//                                 <div className="text-left">
//                                     <h4 className="font-medium text-gray-900">API Integration</h4>
//                                     <p className="text-sm text-gray-500">
//                                         Custom integration via API
//                                     </p>
//                                 </div>
//                             </div>
//                             <ChevronRight
//                                 className="text-gray-400 group-hover:text-indigo-500"
//                                 size={20}
//                             />
//                         </div>
//                     </button>
//                 </div>
//             </div>

//             {/* Tips Section */}
//             <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
//                 <div className="flex gap-3">
//                     <AlertCircle className="text-amber-600 flex-shrink-0" size={20} />
//                     <div>
//                         <h4 className="font-medium text-amber-900">Integration Tips</h4>
//                         <ul className="mt-2 text-sm text-amber-700 space-y-1">
//                             <li>• Test the chat widget before going live</li>
//                             <li>• Customize the appearance to match your brand</li>
//                             <li>• Set up appropriate user permissions</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Documentation Link */}
//             <a href="#" className="block text-center text-sm text-indigo-600 hover:text-indigo-700">
//                 View Integration Documentation →
//             </a>
//         </motion.div>
//     );
// };

// export default IntegrationStep;

import React, { useState } from "react";
import {
    Share2,
    Copy,
    Mail,
    ExternalLink,
    MessageCircle,
    Settings,
    CheckCircle2,
    ArrowRight,
} from "lucide-react";

const IntegrationStep = ({ onShowChat }) => {
    const [showIntegrationModal, setShowIntegrationModal] = useState(false);
    const [showTestModal, setShowTestModal] = useState(false);
    const [integrationDetected, setIntegrationDetected] = useState(false);

    const dummyCode = `<script>
  window.chatbotConfig = {
    apiKey: 'demo-key-123',
    position: 'bottom-right'
  };
</script>
<script src="https://cdn.example.com/chatbot.js"></script>`;

    const handleTestIntegration = () => {
        setShowTestModal(true);
        setTimeout(() => {
            setIntegrationDetected(true);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Top Alert Banner */}
            <div className="bg-blue-500 text-white py-3 px-4 text-center text-sm">
                <span>Chatbot not working as intended?</span>
                <button className="underline ml-1">Share feedback</button>
            </div>

            <div className="max-w-6xl mx-auto p-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">
                        Get Started with Your Chatbot
                    </h1>
                    <p className="text-slate-600">
                        Complete these steps to start engaging with your customers
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Test Chatbot Card */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Test Chatbot</h2>
                            <p className="text-slate-600 mb-6">
                                Preview how your chatbot will appear and interact on your website
                            </p>
                            <button
                                className="w-full bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center"
                                onClick={() => {
                                    onShowChat();
                                }}
                            >
                                Launch Demo
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>

                    {/* Integration Card */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ExternalLink className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Add to Website</h2>
                            <p className="text-slate-600 mb-6">
                                Get the code to integrate the chatbot with your website
                            </p>
                            <button
                                onClick={() => setShowIntegrationModal(true)}
                                className="w-full bg-purple-500 cursor-pointer hover:bg-purple-600 text-white py-2 px-4 rounded-md flex items-center justify-center"
                            >
                                Get Integration Code
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>

                    {/* Test Integration Card */}
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h2 className="text-xl font-semibold mb-4">Verify Setup</h2>
                            <p className="text-slate-600 mb-6">
                                Confirm your chatbot is properly integrated
                            </p>
                            <button
                                onClick={handleTestIntegration}
                                className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md flex items-center justify-center"
                            >
                                Test Integration
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Integration Modal */}
                {showIntegrationModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg max-w-2xl w-full p-6">
                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    Choose Your Integration Method
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white rounded-lg border border-slate-200 p-6 hover:border-purple-200 transition-colors cursor-pointer">
                                    <div className="text-center mb-4">
                                        <Copy className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                        <h3 className="font-semibold">Copy Code</h3>
                                        <p className="text-sm text-slate-500 mt-2">
                                            Add directly to your website
                                        </p>
                                    </div>
                                    <pre className="bg-slate-50 p-4 rounded-md text-sm mb-4 overflow-x-auto">
                                        {dummyCode}
                                    </pre>
                                    <button className="w-full border border-slate-200 hover:bg-slate-50 py-2 px-4 rounded-md">
                                        Copy to Clipboard
                                    </button>
                                </div>

                                <div className="bg-white rounded-lg border border-slate-200 p-6 hover:border-purple-200 transition-colors cursor-pointer">
                                    <div className="text-center">
                                        <Mail className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                        <h3 className="font-semibold">Email Instructions</h3>
                                        <p className="text-sm text-slate-500 mt-2 mb-6">
                                            Send to your developer
                                        </p>
                                        <button className="w-full border border-slate-200 hover:bg-slate-50 py-2 px-4 rounded-md">
                                            Send Email
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={() => setShowIntegrationModal(false)}
                                    className="text-slate-600 hover:text-slate-800"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Test Integration Modal */}
                {showTestModal && (
                    <div className="fixed inset-0 bg-[#F9FAFC] bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white rounded-lg max-w-md w-full p-6">
                            {integrationDetected ? (
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-green-600 mb-6">
                                        Integration Successful!
                                    </h2>
                                    <div className="space-y-4">
                                        <button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2 px-4 rounded-md flex items-center justify-center">
                                            <Settings className="w-4 h-4 mr-2" />
                                            Open Admin Panel
                                        </button>
                                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center">
                                            <MessageCircle className="w-4 h-4 mr-2" />
                                            Try Your Chatbot
                                        </button>
                                        <div className="flex justify-center gap-4 mt-6">
                                            <button className="p-2 border border-slate-200 rounded-md hover:bg-slate-50">
                                                <Share2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 border border-slate-200 rounded-md hover:bg-slate-50">
                                                <Mail className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800 mx-auto mb-6"></div>
                                    <h2 className="text-xl font-semibold mb-4">
                                        Testing Integration...
                                    </h2>
                                    <p className="text-slate-600">
                                        Please wait while we verify your setup
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IntegrationStep;
