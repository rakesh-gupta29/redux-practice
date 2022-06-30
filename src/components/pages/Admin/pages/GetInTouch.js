import React from 'react'
import MUIDataTable from "mui-datatables";
import { createTheme, MuiThemeProvider } from '@material-ui/core';



export const GetInTouch = ({ data }) => {

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
        { name: 'name', label: 'Name' },
        { name: "email", label: "Email" },
        { name: "subject", label: "Subject" },
        { name: 'message', label: 'Message' }

    ];

    console.log(data)

    const options = {
        filterType: 'checkbox',
    };

    return (
        <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={"Get Into Touch"}
                data={data}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
    )
}
