import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const MetadataFetcher = ({ url }) => {
    const [metaData, setMetadata] = useState({
        title: "",
        description: "",
        image: "",
    });

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await axios.get(
                    `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
                );

                const html = response.data.contents;

                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                const title = doc.querySelector("title")?.textContent || "";
                const description =
                    doc.querySelector('meta[name="description"]')?.getAttribute("content") || "";

                const image =
                    doc.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";

                setMetadata({ title, description, image });
            } catch (error) {
                console.error("Error fetching metadata:", error);
            }
        };

        fetchMetadata();
    }, [url]);

    console.log("meta data:", metaData);
    return (
        <Helmet>
            <title>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <meta property="og:title" content={metaData.title} />
            <meta property="og:description" content={metaData.description} />
            <meta property="og:image" content={metaData.image} />
        </Helmet>
    );
};

export default MetadataFetcher;
