import React from "react";
import "./toolspage.css";

function ToolsPage() {
  return (
<div className="tools-bg">
  <div className="tools-wrapper flex flex-col max-width">
    <div className="tools">
      <p><strong>Languages:</strong> TypeScript, JavaScript (ES6+), HTML, CSS</p>
      <p><strong>Frameworks / Libraries:</strong> React.js, Next.js, React Native, Ionic/Capacitor</p>
      <p><strong>State Management & Data Fetching:</strong> Zustand, React Query, Redux Toolkit (RTK Query)</p>
      <p><strong>UI & Animations:</strong> Tailwind CSS, Ant Design, Framer Motion, Reanimated, React Native Paper</p>
      <p><strong>Developer Tools:</strong> Git, GitHub, VS Code, Xcode, Android Studio, Figma (Basic)</p>
      <p><strong>Mobile Capabilities:</strong> Push Notifications (FCM), Deep Linking, App Store & Play Store Deployment</p>
      <p><strong>APIs & Analytics:</strong> WebSockets, Firebase Analytics</p>
    </div>
  </div>
  <div className="footer flex max-width">© Rahul Bobade</div>
</div>

  );
}

export default ToolsPage;
