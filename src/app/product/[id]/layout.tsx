import BreadcrumbsCustom from "@/app/components/ui/BreadcrumbsCustom/BreadcrumCustome";

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
        <BreadcrumbsCustom />
        {children}
      </div>
    </main>
  );
}
