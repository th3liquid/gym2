import React from 'react'
import MUIDataTable from 'mui-datatables'
import users from '../../db/users.json'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const columns = [
    {

    name: "id",
    label: "ID",

    },
    {

    name: "name",
    label: "Nombre",

    },
    {

    name: "email",
    label: "Email",

    },
    {

    name: "gender",
    label: "Sexo",

    },
    {

    name: "status",
    label: "Status",
    options: {
        customBodyRender: (value) => {
          // Renderiza un círculo verde si el valor es "activo", de lo contrario, un círculo rojo
          return (
            <FiberManualRecordIcon
              style={{ color: value === 'Activo' ? 'green' : 'red' }}
            />
          );
        },
      },
    },

    
    {

    name: "membresia",
    label: "Membresia",

    },

]




export const TablasNuevas = () => {


  return (
    <>
    <MUIDataTable
    title={"Lista de socios"}
    columns={columns}
    data={users} />
    </>
  )
}
