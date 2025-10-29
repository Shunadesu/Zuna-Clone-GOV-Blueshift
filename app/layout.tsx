import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: "SIMD-0326: Alpenglow - Blueshift Governance Dashboard",
  description: "Claim your vote tokens, cast your vote and track progress on SIMD-0326: Alpenglow",
  openGraph: {
    title: "SIMD-0326: Alpenglow - Blueshift Governance Dashboard",
    description: "Claim your vote tokens, cast your vote and track progress on SIMD-0326: Alpenglow",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIMD-0326: Alpenglow - Blueshift Governance Dashboard",
    description: "Claim your vote tokens, cast your vote and track progress on SIMD-0326: Alpenglow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans min-h-screen flex flex-col">
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t border-blueshift-gray-800 bg-blueshift-gray-900/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-sm">
              <div className="flex items-center space-x-2 text-blueshift-gray-400">
                <span>Built with</span>
                <span className="text-red-500">❤️</span>
                <span>by</span>
                <svg width="60" height="12" viewBox="0 0 150 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-3 w-auto">
                  <text x="0" y="20" fontFamily="monospace, sans-serif" fontSize="18" fontWeight="bold" fill="white">blueshift</text>
                </svg>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="https://github.com/blueshift-gg/simd-governance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blueshift-gray-400 hover:text-blueshift-cyan transition-colors duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  <span>Contribute on GitHub</span>
                </a>
                <a
                  href="https://x.com/blueshift_gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blueshift-gray-400 hover:text-blueshift-cyan transition-colors duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Follow on X</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}


