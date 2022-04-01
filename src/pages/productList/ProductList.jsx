import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData';
import './productList.css';
import { useState } from 'react';

export default function ProductList() {
  const [rows, setRows] = useState(productRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 230,
      renderCell: (params) => (
        <div className='productList__item'>
          <img
            className='productList__img'
            src={params.row.img}
            alt={params.row.name}
          />
          {params.row.name}
        </div>
      )
    },
    { field: 'stock', headerName: 'Stock', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 180
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/product/${params.row.id}`}>
            <button className='productList__edit'>Edit</button>
          </Link>
          <Delete
            className='productList__delete'
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      )
    }
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
