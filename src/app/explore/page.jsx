import { fetchExploreItems } from "../contexts/fetchData";
import Explore from "./Explore";

export default async function Explores() {
  const exploreItems = await fetchExploreItems();
  const uniNames = [];
  exploreItems.forEach((item) => {
    uniNames.push(item.Name);
  });
  return (
    <>
      <Explore
        exploreItems={exploreItems}
        itemLength={exploreItems.length}
        nameArr={uniNames}
        topSpacing={"pt-28 mb-24"}
        heroText={"Explore Universities"}
      />
    </>
  );
}
