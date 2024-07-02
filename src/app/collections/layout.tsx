"use client";

import { useParams } from "next/navigation";
import Filter from "../components/Filter/Filter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = useParams();
  console.log("🚀 ~ pathname:", pathname);
  return (
    <main className="w-full flex justify-center">
      <div className="max-w-[1024px] flex justify-start w-full px-6">
        <Filter />
        {children}
      </div>
    </main>
  );
}
