import React from "react";
import "@fontsource/roboto";
import BasicInfo from "./OrgInfo/BasicInfo";
import { useState } from "react";

function OrgInfo() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <div className="text-white">
        <div className="flex gap-2 py-5 px-3 justify-around">
            <div className="flex gap-3 items-center">
                <div className={`flex justify-center items-center rounded-full h-[40px] w-[40px] border-2 ${page >= 1 ? "border-blue-500" : "border-black"}`} >
                    <h1 className={`text-3xl font-mono ${page >= 1 ? "text-blue-500" : "text-black"}`}>1</h1>
                </div>
                <p className={`text-2xl text-black ${page >= 1 ? "text-blue-500" : "text-black"}`}>Organization Details</p>
            </div>
            <div className="flex gap-3 items-center">
                <div className={`flex justify-center items-center rounded-full h-[40px] w-[40px] border-2 ${page >= 2 ? "border-blue-500" : "border-black"}`}>
                    <h1 className={`text-3xl font-mono ${page >= 2 ? "text-blue-500" : "text-black"}`}>2</h1>
                </div>
                <p className={`text-2xl text-black ${page >= 2 ? "text-blue-500" : "text-black"}`}>Technical Proposal</p>
            </div>
            <div className="flex gap-3 items-center">
                <div className={`flex justify-center items-center rounded-full h-[40px] w-[40px] border-2 ${page >= 3 ? "border-blue-500" : "border-black"}`}>
                    <h1 className={`text-3xl font-mono ${page >= 3 ? "text-blue-500" : "text-black"}`}>3</h1>
                </div>
                <p className={`text-2xl text-black ${page >= 3 ? "text-blue-500" : "text-black"}`}>Financial & Physical Experience Details</p>
            </div>
            <div className="flex gap-3 items-center">
                <div className={`flex justify-center items-center rounded-full h-[40px] w-[40px] border-2 ${page >= 4 ? "border-blue-500" : "border-black"}`}>
                    <h1 className={`text-3xl font-mono ${page >= 4 ? "text-blue-500" : "text-black"}`}>4</h1>
                </div>
                <p className={`text-2xl text-black ${page >= 4 ? "text-blue-500" : "text-black"}`}>Annual Turnover</p>
            </div>
        </div>
        <div className="flex justify-center items-center w-full h-[96vh]">
          {page === 1 && <BasicInfo />}
          {page === 2 && <div>Technical Proposal Component</div>}
          {page === 3 && <div>Financial & Physical Experience Details Component</div>}
          {page === 4 && <div>Annual Turnover Component</div>}
        </div>
      </div>
    </div>
  );
}

export default OrgInfo;
