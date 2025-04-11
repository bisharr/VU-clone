import { useState } from "react";

import Button from "../components/Button";
import LeftSide from "../components/LeftSide";
import Details from "../components/Details";
import PageTitle from "../components/PageTitle";

function Setting() {
  return (
    <div className="w-full flex">
      <div className="basis-1/5">
        <Button>
          <LeftSide />
        </Button>
      </div>
      <div className="flex-1 bg-gray-100 h-screen ">
        <Details />
        <PageTitle>Teachers</PageTitle>
        <h1>Settings</h1>
        <button className="btn btn-soft">Default</button>
        <button className="btn btn-soft btn-primary">Primary</button>
        <button className="btn btn-soft btn-secondary">Secondary</button>
        <button className="btn btn-soft btn-accent">Accent</button>
        <button className="btn btn-soft btn-info">Info</button>
        <button className="btn btn-soft btn-success">Success</button>
        <button className="btn btn-soft btn-warning">Warning</button>
        <button className="btn btn-soft btn-error">Error</button>
      </div>
    </div>
  );
}

export default Setting;
