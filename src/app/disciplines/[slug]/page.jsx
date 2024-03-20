import disciplineItems from "@/app/components/discipline/DisciplineContent";
import { fetchExploreItems } from "@/app/contexts/fetchData";
import Explore from "@/app/explore/Explore";

export default async function Page({ params }) {
  const exploreItems = await fetchExploreItems();
  const uniArr = disciplineItems.find((item) =>
    item.href.includes(params.slug)
  );
  return (
    <>
      <Explore
        exploreItems={exploreItems}
        itemLength={exploreItems.length}
        nameArr={uniArr.universities}
        topSpacing={"pt-28 mb-24"}
        heroText={uniArr.title}
      />
    </>
  );
}
