import BreadcrumbsCustom from "@/app/components/ui/BreadcrumbsCustom/BreadcrumCustome";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { step: string };
}>) {
  console.log("🚀 ~  params:", params);
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1524px] flex flex-col justify-start w-full py-6">
        <BreadcrumbsCustom />
        <div className="inline-flex">
          <p
            className={`w-full border-b-2 border-b-sky-300 ${
              params.step === "preview" && "border-b-sky-800"
            }`}
          >
            1. Shopping Bag
          </p>
          <p
            className={`w-full border-b-2 border-b-sky-300 ${
              params.step !== "preview" && "border-b-sky-800"
            }`}
          >
            2. Checkout
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}
