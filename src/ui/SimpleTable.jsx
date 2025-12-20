import React, { useState } from "react";
import Table from "./Table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { colomnDef } from "../lib/ColomnDef";
import data from "../lib/data.json";
import { LuChevronsUpDown } from "react-icons/lu";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
function SimpleTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columns, setColumns] = useState(colomnDef);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5, // هر صفحه ۵ ردیف
  });
  //   const sensors = useSensors(useSensor(PointerSensor));

  const tableInstanse = useReactTable({
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    data: data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <Table>
        <thead>
          {tableInstanse.getHeaderGroups().map((headerGroup) => (
            <tr
              className="border-b text-gray-800 border-blue-100 shadow-md "
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <th className="p-2 px-3 font-semibold text-sm border-x  border-blue-100 whitespace-nowrap">
                  <div
                    className="flex items-center gap-x-3 w-full "
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {/* Sorting */}
                    {header.column.columnDef.header}
                    {{
                      asc: (
                        <IoIosArrowRoundUp className="w-5 h-5 text-gray-500" />
                      ),
                      desc: (
                        <IoIosArrowRoundDown className="w-5 h-5 text-gray-500" />
                      ),
                      false: (
                        <LuChevronsUpDown className="w-4 h-4 text-gray-500" />
                      ),
                    }[header.column.getIsSorted()] ?? null}
                  </div>
                  {/* filter */}
                  {header.column.getCanFilter() && (
                    <input
                      value={header.column.getFilterValue() ?? ""}
                      onChange={(e) =>
                        header.column.setFilterValue(e.target.value)
                      }
                      placeholder="فیلتر..."
                      className="mt-1 hidden w-full border p-1 text-sm"
                    />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstanse.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {/* Render each cell's content */}
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={() => tableInstanse.previousPage()}
          disabled={!tableInstanse.getCanPreviousPage()}
        >
          قبلی
        </button>
        {Array.from({ length: tableInstanse.getPageCount() }).map(
          (_, index) => {
            // فقط صفحات نزدیک صفحه فعلی (صفحه فعلی ±2)
            const current = tableInstanse.getState().pagination.pageIndex;
            if (index < current - 1 || index > current + 1) return null;

            return (
              <button
                key={index}
                onClick={() => tableInstanse.setPageIndex(index)}
                className={`px-2 py-1 rounded ${
                  index === current ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            );
          }
        )}

        <button
          onClick={() => tableInstanse.nextPage()}
          disabled={!tableInstanse.getCanNextPage()}
        >
          بعدی
        </button>
        <select
          value={tableInstanse.getState().pagination.pageSize}
          onChange={(e) => tableInstanse.setPageSize(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </>
  );
}

export default SimpleTable;
