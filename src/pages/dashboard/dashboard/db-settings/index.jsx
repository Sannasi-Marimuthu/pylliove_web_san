import React from "react";
import DashboardPage from "../../../../components/dashboard/dashboard/db-settings";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Settings || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

export default function DBSettings() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
