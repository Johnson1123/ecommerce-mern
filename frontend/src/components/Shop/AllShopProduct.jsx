// import React, { useEffect, useState } from "react";
// import { useGetAllProductMutation } from "../../slice/userApiSlice";
// import { setProduct } from "../../slice/productState";
// import { useDispatch, useSelector } from "react-redux";
// import ProductCard from "../Route/ProductCard/ProductCard";

// function AllShopProduct() {
//   const [getAllShopProduct, { isLoading, error }] = useGetAllProductMutation();
//   const dispatch = useDispatch();
//   const { seller } = useSelector((state) => state?.seller);
//   const { product } = useSelector((state) => state?.product);
//   useEffect(() => {
//     (async () => {
//       const res = await getAllShopProduct(seller._id).unwrap();
//       await dispatch(setProduct(res.products));
//     })();
//   }, []);

//   console.log(product);

//   return (
//     <div className="w-[100%] h-full flex justify-center items-center">
//       <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[20px]">
//         {product.map((item, index) => {
//           return <ProductCard product={item} key={index} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default AllShopProduct;
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProduct } from "../../slice/productState";
import {
  useDeleteShopProductMutation,
  useGetAllProductMutation,
} from "../../slice/userApiSlice";
import Loader from "../Layout/Loader";
import { toast } from "react-toastify";

const AllShopProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const { product } = useSelector((state) => state?.product);

  const dispatch = useDispatch();

  const [getAllShopProduct, { isLoading, error }] = useGetAllProductMutation();

  const [deleteProduct] = useDeleteShopProductMutation();

  useEffect(() => {
    (async () => {
      const res = await getAllShopProduct(seller._id).unwrap();
      await dispatch(setProduct(res.products));
    })();
  }, []);

  const deleteShopProduct = async (id) => {
    try {
      const res = await deleteProduct(id);
      toast.success(res?.data?.message);
      window.location.reload(true);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete
                size={20}
                onClick={() => deleteShopProduct(params.id)}
              />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  product &&
    product.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "US$ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-[90%] mx-8 pt-1 mt-2 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllShopProduct;
