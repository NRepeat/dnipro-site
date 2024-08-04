import Filter from "@/app/components/Filter/Filter";
import BreadcrumbsCustom from "@/app/components/ui/BreadcrumbsCustom/BreadcrumCustome";
import filtersAPIactions from "@/app/services/filters";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    filters: string[];
  };
}>) {
  const brands = await filtersAPIactions.getAllBrands();
  const manufactures = await filtersAPIactions.getAllManufactures();

  return (
    <Filter brands={brands.data} manufactures={manufactures.data}>
      <div className="flex flex-col">
        <BreadcrumbsCustom />
        {children}
      </div>
    </Filter>
  );
}
