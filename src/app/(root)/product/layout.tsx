import BreadcrumbsCustom from "@/app/components/ui/BreadcrumbsCustom/BreadcrumCustome";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  params: {
    sex: string;
    category: string;
  };
  modal: React.ReactNode;
}>) {
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1524px] flex flex-col justify-start w-full px-6">
        <BreadcrumbsCustom />
        {children}
        {/* {modal} */}
      </div>
    </main>
  );
}
