import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const CardPopularProducts = () => {
  const {
    data: dashboardMetrics,
    isLoading,
    isError,
  } = useGetDashboardMetricsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!dashboardMetrics) {
    return <div>No data</div>;
  }

  return <div>CardPopularProducts</div>;
};

export default CardPopularProducts;
