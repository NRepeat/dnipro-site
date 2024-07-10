import Filter from "../components/Filter/Filter";
import Welcome from "../components/Welcome/Welcome";

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
      <div className="max-w-[1524px] flex flex-col justify-start w-full px-6">
        <Welcome />
        {children}
      </div>
    </main>
  );
}
