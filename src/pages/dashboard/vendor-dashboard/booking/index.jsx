import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/booking";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Vendor History || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

export default function VendorBooking() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
