# AI Chatbot Integration Platform

A modern React application for setting up and integrating AI chatbots into websites. The platform provides a streamlined setup process, API integration capabilities, and a user-friendly dashboard for managing website content scraping.

## 🚀 Features

-   **Multi-step Setup Process**

    -   Account Registration
    -   Organization Configuration
    -   Integration Options

-   **Chat Widget Integration**

    -   Live Chat Testing Interface
    -   Customizable Widget Positioning
    -   Real-time Message Preview

-   **API Integration Panel**

    -   API Key Management
    -   Code Snippets & Examples
    -   Documentation Access

-   **Website Content Management**

    -   Automated Content Scraping
    -   Metadata Fetching
    -   Content Chunk Analysis

-   **Advanced UI Components**
    -   Animated Transitions (using Framer Motion)
    -   Modern Design System
    -   Responsive Layouts

## 🛠️ Technologies Used

-   React
-   Framer Motion (animations)
-   Tailwind CSS (styling)
-   Lucide React (icons)
-   Axios (HTTP client)

## 📋 Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

## 💻 Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🔧 Configuration

### API Integration

Add your API credentials to the configuration:

```javascript
const apiKey = "your-api-key";
```

### Chat Widget Setup

Include the widget script in your HTML:

```html
<script>
    window.chatbotConfig = {
        apiKey: "your-api-key",
        position: "bottom-right",
    };
</script>
<script src="https://cdn.example.com/chatbot.js"></script>
```

## 📁 Project Structure

```
src/
├── components/
│   ├── APIIntegrationPanel.jsx
│   ├── BeyondChat.jsx
│   ├── IntegrationStep.jsx
│   ├── MetadataFetcher.jsx
│   ├── OrganisationStep.jsx
│   └── ScrapingDashboard.jsx
├── assets/
│   └── icons/
└── styles/
```

## 🔍 Component Overview

### APIIntegrationPanel

-   Manages API key display and code snippet examples
-   Handles copy-to-clipboard functionality
-   Provides authentication documentation

### BeyondChat

-   Main application component
-   Manages setup workflow
-   Handles chat interface state

### ScrapingDashboard

-   Displays website scraping status
-   Shows content chunks
-   Manages scraping progress

### MetadataFetcher

-   Fetches website metadata
-   Updates page metadata dynamically
-   Handles SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
