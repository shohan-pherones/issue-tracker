"use client";

import {
  QueryClientProvider as NextQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextQueryClientProvider client={queryClient}>
      {children}
    </NextQueryClientProvider>
  );
};

export default QueryClientProvider;
