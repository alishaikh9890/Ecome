

 export const fetchApi = async(filter, skip, searching) => {
      const res = await fetch(`https://dummyjson.com/products${filter}${searching}limit=8&skip=${skip}`)
      let data = await res.json();
return data;
    }


 export const fetchCategores = async() => {
        const res = await fetch(`https://dummyjson.com/products/categories`)
        let data = await res.json();
      return data
      }