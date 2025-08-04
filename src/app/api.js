import { useEffect, useState } from "react";


 export const fetchApi = async(filter, skip, searching) => {
      try {
        const res = await fetch(`https://dummyjson.com/products${filter}${searching}limit=8&skip=${skip}`)
        return await res.json();
      } catch (error) {
        console.log(error)
      }
    }

export const useFetchSingleProduct = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState()
  const [prod, setProd] = useState({})

  useEffect(() =>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((res) => setProd(res))
    .catch((err) => setError(err))
    .finally(() => setLoading(false))
  },[id])

      return {loading, error, prod}

}


 export const fetchCategores = async() => {
        try {
          const res = await fetch(`https://dummyjson.com/products/categories`)
          return await res.json();
        } catch (error) {
          console.log(error)
        }
      }