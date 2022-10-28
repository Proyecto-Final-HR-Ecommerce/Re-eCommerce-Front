import { Button, Icon, IconButton, Link } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  deleteProduct,
  updateProduct,
} from "../../../../redux/actions/productActions";
import ClearIcon from "@mui/icons-material/Clear";
import { red } from "@mui/material/colors";

const ProductAdmin = () => {
  const allProducts = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOnPut = () => {
    dispatch(updateProduct(id));
  };
  const handleOnDelete = () => {
    setOpen(!open);
    dispatch(deleteProduct(id));
  };
  const rows = allProducts.map((p) => ({
    id: p._id,
    name: p.name,
    stock: p.stock,
    exists: p.exists,
    numReviews: p.numReviews,
    price: p.price,
    rating: p.rating,
  }));

  const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Product",
      width: 260,
      renderCell: (params) => {
        return <div className="cellName">{params.row.name}</div>;
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,
    },
    {
      field: "price",
      headerName: "Precio",
      width: 100,
    },
    {
      field: "numReviews",
      headerName: "Opiniones",
      width: 100,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 70,
    },
    {
      field: "exists",
      headerName: "Estado",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`${params.row.exists}`}>
            {params.row.exists === true ? "Disponible" : "No disponible"}
          </div>
        );
      },
    },
    {
      field: "Acción",
      headerName: "Acción",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`${params.row.id}`}>
            {
              <>
                <IconButton onClick={() => handleOnPut}>
                  <BorderColorIcon />
                </IconButton>
                <IconButton>
                  <ClearIcon
                    sx={{ color: red[500] }}
                    onClick={() => handleOnDelete}
                  />
                </IconButton>
              </>
            }
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "60%",
        marginTop: "4rem",
        marginLeft: "0.25rem",
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/newproduct">
        <Button variant="contained" color="secondary">
          Crear producto
        </Button>
      </Link>
      <DataGrid
        autoHeight
        rows={rows}
        columns={productColumns}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default ProductAdmin;
