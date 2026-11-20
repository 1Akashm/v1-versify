import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main>
      <h1>Versify Posts</h1>

      <Suspense
        fallback={
          <div className="rounded-lg border p-1 space-y-2 w-1/2">
            {/* name */}
            <Skeleton height={24} width="30%" />
            {/* content */}
            <Skeleton count={1} />
          </div>
        }
      >
        <Posts />
      </Suspense>
    </main>
  );
}
