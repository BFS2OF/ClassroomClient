import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layout.jsx';
import "./common/styles/main.css";
import {QuizProvider} from "@/common/contexts/QuizContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QuizProvider>
          <App />
      </QuizProvider>
  </React.StrictMode>,
)
