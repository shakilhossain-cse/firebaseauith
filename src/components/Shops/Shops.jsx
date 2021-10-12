import React from "react";
import Shop from "../Shop/Shop";

const Shops = () => {
  return (
    <div className="bg-danger py-4">
      <div className="container mt-2">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
          <Shop />
        </div>
      </div>
    </div>
  );
};

export default Shops;
