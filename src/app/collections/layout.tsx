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
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1524px] flex justify-start w-full px-6">
        {children}
      </div>
    </main>
  );
}
