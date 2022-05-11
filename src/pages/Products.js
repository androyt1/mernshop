import React, { useEffect, useState, useCallback } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/products";
import Search from "../components/Search";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allProducts);
  const {  loading, error } = state;
  const [products, setProducts] = useState([]);

  const initFetch = useCallback(() => {
    dispatch(getProducts() )
    .then(res=>{     
        setProducts(res.products)
    }).catch(err=>{
        console.log(err)
    })
  }, [dispatch]);


  useEffect(() => {
    initFetch();
  }, [initFetch]); 

  const [search, setSearch] = useState(""); 
  const[category,setCategory] = useState("");

  //handle products search   
 

  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center">
        <h1 className="text-center font-bold text-xl md:text-2xl text-black mt-6 ">
          {loading ? "...Loading Products...please wait" : ""}
        </h1>

        <h1 className="text-center font-bold text-xl md:text-xl text-black mt-6 ">
          {error && "Something went wrong"}
        </h1>
      </div>

      <Search search={search} setSearch={setSearch} category={category} setCategory={setCategory} />

      <ProductCard products={products} search={search} category={category} />
    </>
  );
};

export default Products;
