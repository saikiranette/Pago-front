import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <div class="jumbotron p-1 p-md-4 text-white rounded bg-dark">
      <div class="col-md-4 px-0">
        <h4 class="display-7 font-italic">Dashboard</h4>
        <p class="lead my-3">Lead Funnel Dashboard</p>
        <p class="lead mb-0">
          <NavLink to="#" class="text-white font-italic">
            As of Aug 25, 2020...
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SubNav;
