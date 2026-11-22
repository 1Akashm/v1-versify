"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function PostsSkeleton() {
  return (
    <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6" duration={1.4}>
      <div className="rounded-lg border p-3 w-1/2 space-y-3">
        <Skeleton height={12} width="20%" />
        <Skeleton height={14} width="45%" />
        <Skeleton height={14} width="60%" />
        <Skeleton height={24} width="100%" />
      </div>
    </SkeletonTheme>
  );
}
