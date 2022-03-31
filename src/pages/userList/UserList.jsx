import { DataGrid } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';
import { rowsTable } from '../../dummyData';
import './userList.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function UserList() {
  const [rows, setRows] = useState(rowsTable);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 230,
      renderCell: (params) => (
        <div className='user-list__user'>
          <img className='user-list__img' src={params.row.avatar} alt='' />
          {params.row.username}
        </div>
      )
    },
    { field: 'email', headerName: 'Email', width: 230 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 180
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <>
          <Link to={`/user/${params.row.id}`}>
            <button className='user-list__edit'>Edit</button>
          </Link>
          <Delete
            className='user-list__delete'
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      )
    }
  ];

  return (
    <div className='user-list'>
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
