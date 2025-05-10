import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById("root");
const app = createRoot(root as HTMLElement);

app.render(
  <StrictMode>
    <App />
  </StrictMode>
);

