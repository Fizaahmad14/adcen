import { notFound } from "next/navigation";

export async function fetchExploreItems() {
    const res = await fetch("http://localhost:3000/api/lists");
    if (!res.ok) return notFound();
    const data = await res.json();
    const data2 = await data;
    return data2;
}
