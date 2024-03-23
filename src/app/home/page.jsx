import Hero from "../components/home/Hero";
import Discipline from "../components/discipline/Discipline";
import TestBtn from "../components/home/TestBtn";
import Explore from "../explore/Explore";
import { fetchExploreItems } from "../contexts/fetchData";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { CgMoreO } from "react-icons/cg";

export default async function HomePage() {
  const exploreItems = await fetchExploreItems();
  const uniNames = [];
  exploreItems.forEach((item) => {
    uniNames.push(item.Name);
  });

  return (
    <>
      <main>
        <section className="bg-[url('../../public/images/hero/hero-img.jpg')] bg-cover bg-center object-cover relative">
          <div className="bg-gray-900/40">
            <Hero />
          </div>
        </section>
        <hr className="h-[,5px] border-[.5px] border-gray-300 text-green-500" />
        <section className="py-20">
          <Discipline />
        </section>
        <hr className="h-[,5px] border-[.5px] border-gray-300 text-green-500" />
        <section className="py-20">
          <TestBtn />
        </section>
        <hr className="h-[,5px] container border-[.5px] border-gray-300 text-green-500" />
        <section className="pt-20 pb-10">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl pb-6 leading-tight font-poppins underline underline-offset-4 decoration-green-500">
              Browse By University
            </h2>
          </div>
          <Explore
            exploreItems={exploreItems}
            itemLength={8}
            nameArr={uniNames}
          />
          <div className="flex container mx-auto pt-10 justify-center px-5 w-full">
            <Button
              endContent={<CgMoreO />}
              href="/explore"
              as={Link}
              size="sm"
              variant="solid"
              className="bg-green-500 rounded text-base text-white"
            >
              View More
            </Button>
          </div>
        </section>
        <hr className="h-[,5px] border-[.5px] border-gray-300 text-green-500" />
      </main>
    </>
  );
}
