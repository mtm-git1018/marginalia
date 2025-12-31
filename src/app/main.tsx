import { createRoot } from 'react-dom/client'
import App from './App'
import "@/shared/styles/global.css";
import { HelmetProvider } from '@dr.pogodin/react-helmet';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
