import { motion } from "framer-motion";
import { Building, Globe, FileText } from "lucide-react";
import ScrapingDashboard from "./ScrapingDashboard";
import MetadataFetcher from "./MetadataFetcher";

const OrganisationStep = ({ onNext }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto space-y-6"
    >
        <div className="space-y-4">
            <div className="relative">
                <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="Organization Name"
                    className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
            </div>

            <div className="relative">
                <Globe className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                    type="url"
                    placeholder="Website URL"
                    className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
            </div>

            <div className="relative">
                <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
                <textarea
                    placeholder="Brief description of your organization"
                    className="w-full pl-10 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none min-h-[100px] resize-none"
                />
            </div>

            <div>
                <MetadataFetcher url="https://www.google.com/" />
            </div>

            <div>
                <ScrapingDashboard />
            </div>
        </div>

        <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-indigo-600 cursor-pointer to-purple-600 text-white p-3 rounded-lg hover:opacity-90 transition-opacity"
        >
            Continue
        </button>

        <p className="text-sm text-gray-500 text-center">
            This information helps us customize your AI assistant experience
        </p>
    </motion.div>
);

export default OrganisationStep;
