import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { session } from "next-auth";
import AuthProvider from "../../components/AuthProvider";
import { Jost, Poppins } from "next/font/google";
import { Providers } from "./providers";
import { WishlistProvider } from "./components/wishlist/WishListContext";
import { Suspense } from "react";
import Loading from "./loading";

const jost = Jost({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-jost",
});

const poppins = Poppins({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${poppins.variable}`}
    >
      <body className="font-jost bg-gray-200">
        <Providers>
          <Suspense fallback={<Loading />}>
            {/* <AuthProvider session={session}> */}
            <WishlistProvider>
              <Header />
              {children}
              <Footer />
            </WishlistProvider>
            {/* </AuthProvider> */}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
