import InvoiceComponent from "@/components/invoice/Invoice";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Invoice || Py Ollive -- Hotel Rooms & Conference Hall Booking ",
  description: "Py Ollive -- Hotel Rooms & Conference Hall Booking ",
};

const Invoice = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <InvoiceComponent />
    </>
  );
};

export default Invoice;
