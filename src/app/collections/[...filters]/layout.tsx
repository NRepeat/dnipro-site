import Filter from "@/app/components/Filter/Filter";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    filters: string[];
  };
}>) {
  return <Filter>{children}</Filter>;
}
