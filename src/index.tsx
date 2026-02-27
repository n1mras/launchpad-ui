import React from 'react';
import { createRoot } from 'react-dom/client'; // Import the new root API
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { VideoPage } from "./components/page/video/VideoPage";
import { Header } from "./components/header/Header";

// Roboto Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Header />
            <VideoPage />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
