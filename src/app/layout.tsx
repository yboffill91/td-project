import type { Metadata } from 'next';
import './globals.css';
import { BodyFonts } from '@/lib';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';
import { AuthGuard } from '@/providers/AuthGuardProvider';
import { ToastProvider } from '@/providers/ToastProvider';

export const metadata: Metadata = {
  title:
    'TAMERDigital | Professional web development and digital solutions for modern businesses. Expert services in web design, development, and optimization. ',
  description:
    'Professional web development and digital solutions for modern businesses. Expert services in web design, development, and optimization.',
  keywords:
    'tamer, digital, tamer digital, tamer digital marketing, tamer digital marketing services, tamer digital services, tamer digital agency, tamer agency, digital marketing, digital marketing services, digital services, agency, marketing, services, SEO, SEM, SEO services, SEO agency, SEO agency services, Web Development, Web Design, Web Development Services, Web Design Services, Web Development Agency, Web Design Agency, Web Development Agency Services, Web Design Agency Services, Tamer Digital Agency, Tamer Digital Agency Services, Tamer Digital Services, Tamer Digital Marketing, Tamer Digital Marketing Services, Tamer Digital SEO, Tamer Digital SEO Services, Tamer Digital Web Development, Tamer Digital Web Design, Tamer Digital Web Development Services, Tamer Digital Web Design Services, Tamer Digital Web Development Agency, Tamer Digital Web Design Agency, Tamer Digital Web Development Agency Services, Tamer Digital Web Design Agency Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${BodyFonts.className} overflow-x-hidden theme-transition `}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange={false}
        >
          <AuthProvider>
            <AuthGuard>
              {children}
              <ToastProvider />
            </AuthGuard>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
