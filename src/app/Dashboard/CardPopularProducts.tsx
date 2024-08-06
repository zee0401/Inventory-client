"use client";
import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React from "react";
import Rating from "@/app/(components)/Rating";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white rounded-2xl pb-16 shadow-md">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-x-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between px-5  gap-3 border-b py-7"
              >
                <div className="flex items-center gap-3">
                  {/* <div>{product.imageUrl}</div> */}
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-lg">{product.name}</div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${product.price}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-xs">
                  <button className="p-2 rounded-full bg-blue-100 twxt-blue-600 mr-2">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                  {Math.round(product.stockQuantity / 1000)}k sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
