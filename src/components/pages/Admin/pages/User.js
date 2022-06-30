import React from 'react'
import MUIDataTable from "mui-datatables";
import { Delete } from '@material-ui/icons';
import { createTheme, MuiThemeProvider } from '@material-ui/core';



export const User = ({ data }) => {

    const getMuiTheme = () =>
        createTheme({
            overrides: {
                MUIDataTableHeadCell: {
                    toolButton: {
                        fontSize: "1.5rem",
                    },
                },
                MUIDataTableBodyCell: {
                    root: {
                        fontSize: "1.5rem",
                    }
                },
                MUIDataTablePagination: {
                    root: {
                        fontSize: "1.5rem",
                        '& .MuiTablePagination-caption': {
                            fontSize: "1.5rem"
                        },
                        '& .MuiMenu-paper': {
                            backgroundColor: "red"
                        }
                    }
                },

            }

        });

    const columns = [
        { name: 'displayName', label: 'User Name' },
        { name: "email", label: "Email" },
        { name: "documentID", label: "Document ID" },
        { name: 'userRoles', label: 'User Roles' },
        // { name: 'userStatus', label: 'User Status',
        // options: {
        //     customBodyRender: (items, id) => {
        //         const data = id.rowData
        //         // console.log(id.rowData,"rahul")
        //         return <Delete style={{ fontSize: "25px" }} />
        //     }
        // }
        // },
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={"User List"}
                data={data}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
    )
}
