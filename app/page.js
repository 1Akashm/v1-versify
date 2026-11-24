import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Posts from "./components/Posts";
import PostsSkeleton from "./components/Skeleton";
import Buttons from "./components/Buttons";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense> */}
    </main>
  );
}
