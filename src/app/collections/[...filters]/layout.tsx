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
  console.log("🚀 ~ params:", params);
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1024px] flex justify-start w-full px-6">
        <Filter>{children}</Filter>
      </div>
    </main>
  );
}
