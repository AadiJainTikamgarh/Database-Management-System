import React from "react";
import { useSelector } from "react-redux";
import { Table, Checkbox, MantineProvider, Input, Button } from "@mantine/core";
import { useState } from "react";
import "@mantine/core/styles.css";

function DataTable() {
  const data = useSelector((state) => state.data);
  const filteredData = data;
  const [selectedRows, setSelectedRows] = useState([]);
  console.log(filteredData);
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
    <div className="flex flex-col gap-3 p-4 px-5 w-dvw h-dvh bg-zinc-950">
        <MantineProvider>
      <div className="flex justify-end gap-4">
        
        <Input placeholder="Customer Name" styles={{
                input: {
                  width: "20vw",
                  background: "transparent",
                  color: "white",
                },}} />
        <Input placeholder="Department" styles={{
                input: {
                  width: "20vw",
                  background: "transparent",
                  color: "white",
                },}} />

        <Button variant="filled" style ={{width:"9vw", minWidth:"80px"}}>Search</Button>
      </div>
      <div className="border-1 border-zinc-500 grow-1">
          <Table className="text-zinc-200">
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
