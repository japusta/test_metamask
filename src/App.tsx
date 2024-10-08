import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { AppRoutes } from './app/routes'; 
import { WalletProvider } from './shared/providers/WalletProvider';
import './fonts.css'; 

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      <WalletProvider>
        <div className="min-h-screen flex items-center justify-center bg-#171719 p-0">
          <AppRoutes /> 
        </div>
      </WalletProvider>
    </QueryClientProvider>
  );
}

export default App;
