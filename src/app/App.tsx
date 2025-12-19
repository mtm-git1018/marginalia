import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes/route'
import { RouterProvider } from "react-router/dom";
import { AuthProvider } from '../shared/context/AuthContext';



function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App
