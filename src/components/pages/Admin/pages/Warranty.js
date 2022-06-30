import React from 'react'
import MUIDataTable from "mui-datatables";
import { createTheme, MuiThemeProvider } from '@material-ui/core'


export const Warranty = ({ data }) => {

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
        { name: "fullName", label: "Name" },
        { name: "phoneNo", label: "Phone Number" },
        { name: "email", label: "Email" },
        { name: "address", label: "Address" },
        { name: "city", label: "City" },
        { name: "state", label: "State" },
        { name: "proName", label: "Product Name" },
        { name: "orderNo", label: "Order No" },
        { name: "proPurchase", label: "Product Purchase By" },
        { name: "radio", label: "Use or Not" },
        { name: "dop", label: "Date of Purchase" },

    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
            title={"Warranty List"}
            data={data}
            columns={columns}
            options={options}
        />
    </MuiThemeProvider>

    )
}
