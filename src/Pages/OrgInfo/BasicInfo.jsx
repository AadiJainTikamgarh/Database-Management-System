import React from "react";
import { MantineProvider, Button } from "@mantine/core";

function BasicInfo() {
  return (
    <div>
      <div className="bg-zinc-800 rounded-lg">
        <form action="">
          <div className="p-5 flex gap-4 flex-col">
            <div className="flex gap-4">
              <div>
                <label htmlFor="RegNo">Registration No. </label>
                <input
                  type="text"
                  className=" border-b-2 border-zinc-500 outline-0 px-3"
                />
              </div>
              <div className="flex gap-4">
                <label htmlFor="date">Date: </label>
                <input
                  type="date"
                  className="border-b-2 border-zinc-500 outline-0 px-3"
                />
                <label htmlFor="validto">Valid to </label>
                <input
                  type="date"
                  className="border-b-2 border-zinc-500 outline-0 px-3 ="
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">Name of Organization: </label>
                <input
                  type="text"
                  placeholder="Name of Organization/ Individual/ Proprietary Firm/ Partnership Firm"
                  className="grow-1 outline-0 border-b-2 border-zinc-500 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">Entity of Organization: </label>
                <input
                  list="EntityOrg"
                  placeholder=""
                  className="grow-1 outline-0 border-b-2 border-zinc-500 px-3"
                />
                <datalist id="EntityOrg">
                  <option value="Individual" />
                  <option value="Proprietary Firm" />
                  <option value="Partnership Firm" />
                  <option value="Limited Company" />
                  <option value="Corporation" />
                  <option value="Joint Venture" />
                </datalist>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">If other Then Individual</label>{" "}
                {"    "}
                <label htmlFor="No">No. </label>
                <input
                  type="text"
                  className="outline-none  border-b-2 border-zinc-500 grow-1 px-3"
                />
                <label htmlFor="Date">Date: </label>
                <input
                  type="date"
                  className="outline-none border-b-2 border-zinc-500 grow-1 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">PAN No: </label>
                <input
                  type="text"
                  placeholder=""
                  className="grow-1 outline-0 border-b-2 border-zinc-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">GST Registration </label> {"    "}
                <label htmlFor="No">No. </label>
                <input
                  type="text"
                  className="outline-none  border-b-2 border-zinc-500 grow-1 px-3"
                />
                <label htmlFor="Date">Date: </label>
                <input
                  type="date"
                  className="outline-none border-b-2 border-zinc-500 grow-1 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">EPF Registration </label> {"    "}
                <label htmlFor="No">No. </label>
                <input
                  type="text"
                  className="outline-none  border-b-2 border-zinc-500 grow-1 px-3"
                />
                <label htmlFor="Date">Date: </label>
                <input
                  type="date"
                  className="outline-none border-b-2 border-zinc-500 grow-1 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">ESI Registration </label> {"  "}
                <label htmlFor="No">No. </label>
                <input
                  type="text"
                  className="outline-none  border-b-2 border-zinc-500 grow-1 px-3"
                />
                <label htmlFor="Date">Date: </label>
                <input
                  type="date"
                  className="outline-none border-b-2 border-zinc-500 grow-1 px-3 [&::-webkit-calendar-picker-indicator]:opacity-0"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">Address of Communication : </label>
                <input
                  type="text"
                  placeholder="Enter Communication address ..."
                  className="grow-1 outline-0 border-b-2 border-zinc-500 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">
                  Telephone Number with STD Code :{" "}
                </label>
                <input
                  type="tel"
                  placeholder="+91 0000 000 000"
                  className="grow-1 outline-0 border-b-2 border-zinc-500 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">Fax Number with STD Code : </label>
                <input
                  type="tel"
                  placeholder="+91 0000 000 000"
                  className="grow-1 outline-0 border-b-2 border-zinc-500 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">Mobile Number : </label>
                <input
                  type="tel"
                  placeholder="+91 0000 000 000"
                  className="grow-1 outline-0 border-b-2 border-zinc-500 px-3"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 w-full">
                <label htmlFor="OrgName">
                  E-mail Address for all Communication :{" "}
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="grow-1 outline-0 border-b-2 border-zinc-500 px-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button variant="filled">Next</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicInfo;
