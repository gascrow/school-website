import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import { Providers } from "./providers";
import MainLayout from "./MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head></head>

      <body className="bg-[#FCFCFC] dark:bg-black">
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
