import { React } from "react";

import BottomAddOn from "../features/addon/BottomAddOn";
import TopAddOn from "../features/addon/TopAddOn";

function AddOnPage() {
  return (
    <div
      className="z-0  h-128 max-h-fit flex flex-col 
      bg-gradient-to-br 
    from-indigo-500 to-indigo-700 "
    >
      <TopAddOn />
      <BottomAddOn />
    </div>
  );
}

export default AddOnPage;
