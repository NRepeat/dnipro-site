import Filter from "../components/Filter/Filter";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    sex: string;
    category: string;
  };
}>) {
  console.log("🚀 ~ params:", params);
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1024px] flex justify-start w-full px-6">
        {children}
      </div>
    </main>
  );
}
