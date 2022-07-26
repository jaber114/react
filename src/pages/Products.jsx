import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const Products = () => {
  const [product, setProduct] = useState([]);
  const ck = "ck_247ffd722846a78c621c84cc2a73eaceedba444a";
  const sc = "cs_e37eb7accff884ef48c9c626637b649db3cb0bd8";
  const original_key = `https://jab.local/wp-json/wc/v3/products?consumer_key=${ck}&consumer_secret=${sc}`;
  async function fetchdata() {
    try {
      const request = await axios.get(original_key);
      const data = await request.data;
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [original_key]);

  return (
    <div>
      {/* when i use product.map here its works but in down it doesnt work */}
      <div>
        {product.length > 0 &&
          product.map((prod, i) => <div key={i}>{prod.slug}</div>)}
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Product Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{product[0].id}</TableCell>
              <TableCell>{product[0].slug}</TableCell>
              <TableCell>{product[0].price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{product[1].id}</TableCell>
              <TableCell>{product[1].slug}</TableCell>
              <TableCell>{product[1].price}</TableCell>
            </TableRow>
            {/* {product.length == 0 && "items is zero"}
            {product.length > 0 &&
              product.map((prod, i) => {
                <TableRow key={i}>
                  <TableCell>{prod.id}</TableCell>
                  <TableCell>{prod.slug}</TableCell>
                  <TableCell>{prod.price}</TableCell>
                </TableRow>;
              })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Products;
