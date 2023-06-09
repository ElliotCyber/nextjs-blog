import { Footer, Navbar } from "@/components";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import Provider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raz Dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Provider>
            <div className="app">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
