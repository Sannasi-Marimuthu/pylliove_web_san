import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-wishlist";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Wishlist || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

export default function DBWishlist() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
