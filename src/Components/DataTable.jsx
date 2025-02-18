import React from "react";
import { useSelector } from "react-redux";
import { Table, Checkbox, MantineProvider, Input, Button } from "@mantine/core";
import { useState, useEffect } from "react";
import "@mantine/core/styles.css";

function DataTable() {
  const data = useSelector((state) => state.data);
  const [filteredData, setfilteredData] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [customer, setCustomer] = useState("");
  const [department, setDepartment] = useState("");
  // console.log(filteredData);

  useEffect(()=> {
    if(customer === "" && department === ""){
      setfilteredData(data)
    }
  }, [customer, department])

  const rows = filteredData.map((ele) => (
    <Table.Tr key={ele.name}>
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(ele.name)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, ele.name]
                : selectedRows.filter((name) => name !== ele.name)
            )
          }
          styles={{ input: { backgroundColor: "rgb(39 39 42)" } }}
        />
      </Table.Td>
      <Table.Td>{ele.name}</Table.Td>
      <Table.Td>{ele.department}</Table.Td>
      <Table.Td>{ele.valid_till}</Table.Td>
      <Table.Td>{ele.contact_no}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="flex flex-col gap-3 p-4 px-5 w-full h-dvh bg-zinc-950">
      <MantineProvider>
        <div className="flex flex-col items-end gap-2">
          <div className="flex justify-end gap-4">
            <Input
              placeholder="Customer Name"
              styles={{
                input: {
                  width: "20vw",
                  background: "transparent",
                  color: "white",
                },
              }}
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
            <Input
              placeholder="Department"
              styles={{
                input: {
                  width: "20vw",
                  background: "transparent",
                  color: "white",
                },
              }}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />

            <Button
              variant="filled"
              style={{ width: "9vw", minWidth: "80px" }}
              onClick={() => {
                setfilteredData(
                  data.filter((ele) => {
                    if (customer === "" && department === "") return true;
                    if (customer === "" && department !== "")
                      return (
                        ele.department.toLowerCase() ===
                        department.toLowerCase()
                      );
                    if (customer !== "" && department === "")
                      return ele.name.toLowerCase() === customer.toLowerCase();
                    if (customer !== "" && department !== "")
                      return (
                        ele.name.toLowerCase() === customer.toLowerCase() &&
                        ele.department.toLowerCase() ===
                          department.toLowerCase()
                      );
                  })
                );
                console.log(customer, department);
              }}
            >
              Search
            </Button>
          </div>
          <div className="flex gap-4">
            <Button variant="filled" style={{ width: "9vw", minWidth: "80px" }}>
              New Entry
            </Button>
            <Button variant="filled" style={{ width: "9vw", minWidth: "80px", backgroundColor: "red" }}>
              Delete
            </Button>
          </div>
        </div>
        <div className="border-1 border-zinc-500 overflow-y-scroll [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar]:w-2">
          <Table
            className="text-zinc-200"
            highlightOnHover
            highlightOnHoverColor="rgb(24 24 27)"
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th />
                <Table.Th>Customer Name</Table.Th>
                <Table.Th>Department</Table.Th>
                <Table.Th>Valid Till</Table.Th>
                <Table.Th>Contact No</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </MantineProvider>
    </div>
  );
}

export default DataTable;
