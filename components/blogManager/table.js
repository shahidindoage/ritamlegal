// components/MyTable.js
import React,{useState, useEffect} from 'react';
import './style.css';
import { BASE_URL } from "@/public/data/url";

import { useTable, usePagination, useSortBy, useGlobalFilter, } from 'react-table';
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
    return (
      <span className='text-black'>
        Search:{' '}
        <input
          value={globalFilter || ''}
          onChange={(e) => setGlobalFilter(e.target.value || undefined)}
          placeholder="Type to search..."
          style={{
            fontSize: '1.1rem',
            marginBottom: '10px',
            padding: '4px',
          }}
        />
      </span>
    );
  };
const BlogTable = ({ columns}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`${BASE_URL}blog/fetchAllBlogs`); // Replace with your actual API URL
          const result = await response.json();
          setData(result.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };

      fetchData();
    }, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page, // Only the rows for the active page
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        setPageSize,
        setGlobalFilter,
        preGlobalFilteredRows,
      } = useTable(
        {
          columns,
          data,
        },
        useGlobalFilter, // For search
        useSortBy, // For sorting
        usePagination // For pagination
      );

      const { pageIndex, pageSize, globalFilter } = state;
      if (loading) {
        return <div>Loading data...</div>;
      }

      return (
        <div>
          {/* Global Search Filter */}
          <GlobalFilter
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            preGlobalFilteredRows={preGlobalFilteredRows}
          />

          <table {...getTableProps()} style={{ width: '100%', border: '1px solid black' }}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      style={{
                        borderBottom: '1px solid black',
                        background: '#f0f0f0',
                        padding: '10px',
                        cursor: 'pointer',
                      }}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: '1px solid black',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div style={{ marginTop: '10px', color:"#000" }}>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous{' '}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
            {' '}Next
            </button>
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 30, 40, 50].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    };
export default BlogTable;
