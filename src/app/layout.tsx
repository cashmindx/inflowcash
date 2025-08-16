import type {Metadata} from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'InFlowCash - Your Personal Business Strategist',
  description: 'Connect with Natalie, your dedicated business strategist, for personalized consultation on business growth, strategies, and success planning.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
        <Script 
          src="https://www.paypal.com/sdk/js?client-id=AdPrczcDw7Pi_U-InZM8FqupTyyCEXQEdCGii3Jnkxg1wy_ijVqoCzmMsK-vAgNC5Bt3vRNPYPsPSYg4&components=hosted-buttons"
          strategy="lazyOnload"
        />
        <Script 
          src="https://unpkg.com/@elevenlabs/convai-widget-embed"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
