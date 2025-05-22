import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-dashboard";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Dashboard || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

export default function DBDashboard() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
