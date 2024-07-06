import Filter from "@/app/components/Filter/Filter";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    filters: string[];
  };
}>) {
  return (
    <main className="w-full ">
      <Filter>{children}</Filter>
    </main>
  );
}
