import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  updateProduct,
} from "../../../redux/actions/productActions";

export default function ProductModal({ openFormDialog, product }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    price: "",
    description: "",
    comment: "",
    stock: "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(product._id));
    setOpen(false);
    alert("Producto eliminado correctamente");
  };
  const handlePut = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product._id, { ...form }));
    setOpen(false);
    alert("Se modificó correctamente");
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        {openFormDialog}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent onChange={(e) => handleChange(e)}>
          <pre>{JSON.stringify(form)}</pre>
          <DialogContentText>Editando {product.name}</DialogContentText>
          <FormControl>
            Nombre
            <Input id="name" aria-describedby="name-text-helper" type="text" />
            <FormHelperText id="name-text-helper">
              El nombre tiene que tener más de 5 letras.
            </FormHelperText>
            Precio
            <Input
              id="price"
              aria-describedby="price-text-helper"
              type="number"
            />
            <FormHelperText id="price-text-helper">
              Precio mayor a 0.
            </FormHelperText>
            Descripción
            <Input id="desc" aria-describedby="desc-text-helper" type="text" />
            <FormHelperText id="desc-text-helper">
              Descripción del producto.
            </FormHelperText>
            Observación
            <Input id="obs" aria-describedby="obs-text-helper" type="text" />
            <FormHelperText id="obs-text-helper">
              Una nota para tener en cuenta.
            </FormHelperText>
            Stock
            <Input
              id="stock"
              aria-describedby="stock-text-helper"
              type="number"
            />
            <FormHelperText id="stock-text-helper">
              Stock mayor a 1.
            </FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={(e) => handlePut(e)}>Aplicar</Button>
          <Button onClick={(e) => handleDelete(e)}>ELIMINAR</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// export default ProductModal;
