import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/recovery";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Vendor Recovery || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

export default function BDVendorRecovery() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
