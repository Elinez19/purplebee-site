
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes"; // Ensure this import is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PurpleBeeTech- Custom Software & App Development Company",
  description: `Custom Software Development Services.Empower your business to soar beyond expectations with our tailor-made
custom software solutions, capable of unleashing innovation.
`,
  // other metadata
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          {/* <ToasterContext /> */}
          {children}
          {/* <Footer /> */}
          {/* <ScrollToTop /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

