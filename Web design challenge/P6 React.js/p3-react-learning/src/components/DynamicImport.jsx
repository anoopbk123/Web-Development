import React, { useState } from "react";

export default function DynamicImport() {
    const [dynamicData, setDynamicData] = useState()
  return (
    <div className="text-center">
      <h4>Dynamic Import</h4>
      {dynamicData&&<div>{dynamicData.default}</div>}
      <button onClick={() => {
        const pr= import('../assets/data-for-dynmic-import')
        pr.then((d)=>setDynamicData(d))
      }} className="btn-primary warning m-1">
        Import
      </button>
    </div>
  );
}
