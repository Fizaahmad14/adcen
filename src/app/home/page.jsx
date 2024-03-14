"use client";
import React from "react";
import Hero from "../components/Hero";
import Discipline from "../components/discipline/Discipline";
import TestBtn from "../components/TestBtn";
import Explore from "../explore/Explore";
import { uniNames } from "../explore/ExploreContent";

export default function HomePage() {
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
        <hr className="h-[,5px] border-[.5px] border-gray-300 text-green-500" />
        <section className="py-20">
          <Explore itemLength={8} nameArr={uniNames} />
        </section>
        <hr className="h-[,5px] border-[.5px] border-gray-300 text-green-500" />
      </main>
    </>
  );
}
