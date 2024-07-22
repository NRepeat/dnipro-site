import Filter from "@/app/components/Filter/Filter";
import BreadcrumbsCustom from "@/app/components/ui/BreadcrumbsCustom/BreadcrumCustome";

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
    <div className="flex flex-col">
      <BreadcrumbsCustom />
      {children}
    </div>
  );
}
