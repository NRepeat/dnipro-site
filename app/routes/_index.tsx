import type { MetaFunction } from "@remix-run/node";
import HeroTitle from "~/components/HeroTitle/HeroTitle";
import Landing from "~/components/Landing/Landing";
import Navbar from "~/components/Navbar/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Navbar />
      {/* <div className="flex-center  bg-teal-100"> */}
      {/* <div className="bg-mainBg max-w-[90%] "> */}

      <Landing />
      {/* </div> */}
      {/* </div> */}
    </main>
  );
}
