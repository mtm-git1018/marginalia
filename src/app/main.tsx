
import { createRoot } from 'react-dom/client'
import App from './App'
import "@/shared/styles/global.css";
import { AuthProvider } from '../shared/context/AuthContext';


createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
