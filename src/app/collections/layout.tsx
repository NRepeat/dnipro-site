"use client";

import { useParams, usePathname } from "next/navigation";
import Filter from "../components/Filter/Filter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const params = useParams();
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1024px] flex justify-start w-full px-6">
        <Filter pathname={pathname} sex={params.sex} />
        {children}
      </div>
    </main>
  );
}
