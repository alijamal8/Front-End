import Navbar from "@/components/navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import arMessages from "@/messages/ar.json";

export default function pagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NextIntlClientProvider locale="ar" messages={arMessages}>
        <Navbar />
        {children}
      </NextIntlClientProvider>
    </main>
  );
}
