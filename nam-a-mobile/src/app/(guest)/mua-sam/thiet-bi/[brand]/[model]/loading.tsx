// app/hang-cu/[brand]/loading.tsx

import ItemCardWrapperSkeleton from "@/components/skeleton/ItemCardWrapperSkeleton";

export default function BrandListingLoading() {
  return (
    <div>
      <section className="min-h-screen py-4 pb-8 bg-gray-50 -mt-16 sm:mt-0">
        <div className="container mx-auto px-4">
          <ItemCardWrapperSkeleton 
            count={12} // Adjust based on expected items count
          />
        </div>
      </section>
    </div>
  );
}