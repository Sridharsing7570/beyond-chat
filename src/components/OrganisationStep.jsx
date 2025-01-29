import { motion } from "framer-motion";
import { Building, Globe, FileText } from "lucide-react";

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

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Organization Size</label>
                <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white">
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                </select>
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
