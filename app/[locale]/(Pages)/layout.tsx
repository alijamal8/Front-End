import Navbar from "@/components/navbar/Navbar";
import SiteFooter from "@/components/global/SiteFooter";

export default function pagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </main>
  );
}
