import { motion } from "framer-motion";
import { Code, Settings, Share2, AlertCircle, ChevronRight } from "lucide-react";

const IntegrationStep = ({ onShowChat, onSuccess, onShowApi }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto space-y-6"
        >
            {/* Integration Options */}
            <div className="space-y-4">
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                    <h3 className="font-medium text-indigo-900 flex items-center gap-2">
                        <Settings size={20} />
                        Configure Your Assistant
                    </h3>
                    <p className="mt-1 text-sm text-indigo-700">
                        Choose how you want to integrate the AI assistant with your platform
                    </p>
                </div>

                {/* Integration Methods */}
                <div className="space-y-3">
                    {/* Website Widget */}
                    <button
                        className="w-full p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors group"
                        onClick={() => {
                            onShowChat();
                            setTimeout(onSuccess, 2000);
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                                    <Code size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-gray-900">Website Widget</h4>
                                    <p className="text-sm text-gray-500">
                                        Add chat to your website
                                    </p>
                                </div>
                            </div>
                            <ChevronRight
                                className="text-gray-400 group-hover:text-indigo-500"
                                size={20}
                            />
                        </div>
                    </button>

                    {/* API Integration */}
                    <button
                        className="w-full p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors group"
                        onClick={onShowApi}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                    <Share2 size={20} />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-gray-900">API Integration</h4>
                                    <p className="text-sm text-gray-500">
                                        Custom integration via API
                                    </p>
                                </div>
                            </div>
                            <ChevronRight
                                className="text-gray-400 group-hover:text-indigo-500"
                                size={20}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Tips Section */}
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <div className="flex gap-3">
                    <AlertCircle className="text-amber-600 flex-shrink-0" size={20} />
                    <div>
                        <h4 className="font-medium text-amber-900">Integration Tips</h4>
                        <ul className="mt-2 text-sm text-amber-700 space-y-1">
                            <li>• Test the chat widget before going live</li>
                            <li>• Customize the appearance to match your brand</li>
                            <li>• Set up appropriate user permissions</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Documentation Link */}
            <a href="#" className="block text-center text-sm text-indigo-600 hover:text-indigo-700">
                View Integration Documentation →
            </a>
        </motion.div>
    );
};

export default IntegrationStep;
