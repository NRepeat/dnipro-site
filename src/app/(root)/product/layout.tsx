import BreadcrumbsCustom from "@/app/components/ui/BreadcrumbsCustom/BreadcrumCustome";
import toast, { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
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
        <Toaster />
      </div>
    </main>
  );
}
