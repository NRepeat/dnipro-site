import type { MetaFunction } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";
import HeroTitle from "~/components/HeroTitle/HeroTitle.client";
import Landing from "~/components/Landing/Landing";
import Navbar from "~/components/Navbar/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const Fallback = () => {
  return <div>Loading IDE...</div>;
};
export default function Index() {
  return (
    <main>
      <Navbar />
      <ClientOnly fallback={<Fallback />}>{() => <HeroTitle />}</ClientOnly>
      <Landing />
    </main>
  );
}
