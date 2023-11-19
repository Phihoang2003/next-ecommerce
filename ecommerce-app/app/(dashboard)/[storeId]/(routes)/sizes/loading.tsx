"use client";

import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return ( 
    <div className="flex h-full w-full items-center justify-center">
      <Skeleton />
    </div>
   );
}
 
export default Loading;