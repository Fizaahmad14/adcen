import { fetchExploreItems } from "../contexts/fetchData";
import Cost from "./Cost";

export default async function page() {
  const exploreItems = await fetchExploreItems();
  const maxCost = await {
    Tuition: Math.max(
      ...exploreItems.map((uni) => +uni.fees.Tuition)
    ),
    Hostel: Math.max(...exploreItems.map((uni) => +uni.fees.Hostel)),
    Transport: Math.max(
      ...exploreItems.map((uni) => +uni.fees.Transport)
    ),
    Food: Math.max(...exploreItems.map((uni) => +uni.fees.Food)),
  };
  return (
    <>
      <Cost exploreItems={exploreItems} maxCost={maxCost} />
    </>
  );
}
