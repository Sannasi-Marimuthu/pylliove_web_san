import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/hotels";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Vendor Hotels || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

export default function BVVendorHotel() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
