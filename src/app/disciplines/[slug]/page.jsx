import React from "react";
import disciplineItems from "@/app/components/discipline/DisciplineContent";
import exploreItems from "@/app/explore/ExploreContent";
import Explore from "@/app/explore/Explore";

export default function Page({ params }) {
  const uniArr = disciplineItems.find((item) =>
    item.href.includes(params.slug)
  );
  return (
    <>
      <Explore
        itemLength={exploreItems.length}
        nameArr={uniArr.universities}
        topSpacing={"pt-28 mb-24"}
        heroText={uniArr.title}
      />
    </>
  );
}
