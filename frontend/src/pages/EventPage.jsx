import React from "react";
import { productData } from "../static/data";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import EventsCard from "../components/Route/Events/EventsCard/EventsCard";

const EventsPage = () => {
  return (
    <>
      <div>
        <Header activeHeading={4} />
        <EventsCard active={true} data={productData && productData[0]} />
        <Footer />
      </div>
    </>
  );
};

export default EventsPage;
