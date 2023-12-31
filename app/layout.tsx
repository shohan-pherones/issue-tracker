import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import QueryClientProvider from "./QueryClientProvider";
import AuthProvider from "./auth/Provider";
import "./globals.css";
import "./theme-config.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue Tracker - Home",
  description: "An advanced issue tracking web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor="teal" appearance="light">
              <Toaster />
              <Navbar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
