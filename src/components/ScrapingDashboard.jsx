import React, { useState } from "react";
import {
    Clock,
    Check,
    AlertCircle,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Globe,
    FileText,
} from "lucide-react";

// Dummy data
const websiteData = [
    {
        id: 1,
        url: "https://example.com/about",
        status: "completed",
        lastScraped: "2024-01-28",
        chunks: [
            {
                id: 1,
                content: "Our company was founded in 2010 with the mission to revolutionize...",
            },
            { id: 2, content: "We have offices in New York, London, and Tokyo..." },
            { id: 3, content: "Our team consists of over 500 professionals worldwide..." },
        ],
    },
    {
        id: 2,
        url: "https://example.com/products",
        status: "pending",
        lastScraped: null,
        chunks: [],
    },
    {
        id: 3,
        url: "https://example.com/services",
        status: "completed",
        lastScraped: "2024-01-29",
        chunks: [
            { id: 4, content: "Our consulting services help businesses transform..." },
            { id: 5, content: "Professional development and training programs..." },
        ],
    },
    {
        id: 4,
        url: "https://example.com/contact",
        status: "failed",
        lastScraped: "2024-01-27",
        chunks: [],
    },
];

const DataChunk = ({ chunk }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg mb-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
            >
                <span className="font-medium">Data Chunk {chunk.id}</span>
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {isOpen && (
                <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 rounded-b-lg">
                    {chunk.content}
                </div>
            )}
        </div>
    );
};

const ScrapingDashboard = () => {
    const [selectedPage, setSelectedPage] = useState(null);

    const getStatusIcon = (status) => {
        switch (status) {
            case "completed":
                return <Check className="h-4 w-4 text-green-500" />;
            case "pending":
                return <Clock className="h-4 w-4 text-yellow-500" />;
            case "failed":
                return <AlertCircle className="h-4 w-4 text-red-500" />;
            default:
                return null;
        }
    };

    const getStatusBadge = (status) => {
        const colors = {
            completed: "bg-green-100 text-green-800",
            pending: "bg-yellow-100 text-yellow-800",
            failed: "bg-red-100 text-red-800",
        };

        return (
            <span
                className={`px-2 py-1 rounded-full text-sm font-medium ${colors[status]} capitalize`}
            >
                {status}
            </span>
        );
    };

    return (
        <div className="space-y-4">
            <div className="bg-white rounded-lg border shadow-sm">
                <div className="px-6 py-4 border-b">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                        <Globe className="h-5 w-5" />
                        Website Scraping Status
                    </h2>
                </div>
                <div className="p-6">
                    <div className="space-y-2">
                        {websiteData.map((page) => (
                            <div
                                key={page.id}
                                className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                onClick={() => setSelectedPage(page)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {getStatusIcon(page.status)}
                                        <span className="font-medium">{page.url}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {getStatusBadge(page.status)}
                                        {page.lastScraped && (
                                            <span className="text-sm text-gray-500">
                                                Last scraped: {page.lastScraped}
                                            </span>
                                        )}
                                        <ChevronRight className="h-4 w-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedPage && (
                <div className="bg-white rounded-lg border shadow-sm">
                    <div className="px-6 py-4 border-b">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Data Chunks - {selectedPage.url}
                        </h2>
                    </div>
                    <div className="p-6">
                        {selectedPage.chunks.length > 0 ? (
                            <div className="space-y-2">
                                {selectedPage.chunks.map((chunk) => (
                                    <DataChunk key={chunk.id} chunk={chunk} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 py-8">
                                {selectedPage.status === "pending"
                                    ? "This page is pending scraping."
                                    : selectedPage.status === "failed"
                                    ? "Scraping failed for this page."
                                    : "No data chunks available for this page."}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScrapingDashboard;
