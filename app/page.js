import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Posts from "./components/Posts";
import PostsSkeleton from "./components/Skeleton";

export default function Home() {
  return (
    <main>
      <h1>Versify Posts</h1>

      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </main>
  );
}
