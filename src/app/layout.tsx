import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextUI from "@/configs/NextUi";
import "./globals.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProviderStore } from "@/hooks/redux/provider";
import { ProviderAuth } from "@/contexts/providerAuth";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderStore>
          <ProviderAuth>
            <NextUI>{children}</NextUI>
          </ProviderAuth>
        </ProviderStore>
        <ToastContainer />
      </body>
    </html>
  );
}
