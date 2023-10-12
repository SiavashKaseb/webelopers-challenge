import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import Loader from "./Loader.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
