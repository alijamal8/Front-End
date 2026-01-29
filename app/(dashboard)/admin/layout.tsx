import Navbar from "@/components/navbar/Navbar";

export default function dashboardAdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
