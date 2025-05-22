import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-booking";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Booking History || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

export default function DBBooking() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
