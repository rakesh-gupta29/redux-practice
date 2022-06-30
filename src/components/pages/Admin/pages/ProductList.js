import React from 'react'
//Material ui
import { createTheme, MuiThemeProvider } from '@material-ui/core'
//Icon
import { Delete } from '@material-ui/icons';
//MUI DataTable
import MUIDataTable from "mui-datatables";
//Redux
import { useDispatch } from 'react-redux';
import { deleteProductStart } from '../../../../Redux/Action';




export const ProductList = ({ products }) => {

    const dispatch = useDispatch();

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
        { name: "productName", label: "Product Name" },
        { name: "ProductPrice", label: "Product Price" },
        { name: "documentID", label: "Document ID" },
        { name: "productDiscrepation", label: "Product Discrepation" },
        {
            name: "delete", label: "Delete",
            options: {
                customBodyRender: (items, id) => {
                    const data = id.rowData
                    return <Delete style={{ fontSize: "25px" }} onClick={() =>
                        dispatch(deleteProductStart(data[2]))
                    } />
                }
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
    };

    return (
        <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
                title={"Product"}
                data={products}
                columns={columns}
                options={options}
            />
        </MuiThemeProvider>
    )
}
