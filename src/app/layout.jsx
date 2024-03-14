import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { session } from "next-auth";
import AuthProvider from "../../components/AuthProvider";
import { Jost, Poppins } from "next/font/google";
import { Providers } from "./providers";
import {
  FavoritesProvider,
  WishlistProvider,
} from "./components/wishlist/WishListContext";

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
        <AuthProvider session={session}>
          <WishlistProvider>
            <Header />
            {children}
            <Footer />
          </WishlistProvider>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
