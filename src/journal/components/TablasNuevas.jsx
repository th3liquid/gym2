import React from 'react'
import MUIDataTable from 'mui-datatables'
import users from '../../db/users.json'


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
