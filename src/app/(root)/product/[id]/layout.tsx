import BreadcrumbsCustom from "@/app/components/ui/BreadcrumbsCustom/BreadcrumCustome";

export default function RootLayout({
  children,
  item,
  moreProducts,
}: Readonly<{
  children: React.ReactNode;
  params: {
    sex: string;
    category: string;
  };
  item: React.ReactNode;
  moreProducts: React.ReactNode;
}>) {
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1524px] flex flex-col justify-start w-full px-6">
        {children}
        {item}
        {moreProducts}
      </div>
    </main>
  );
}
