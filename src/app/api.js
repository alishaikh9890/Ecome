

 export const fetchApi = async(filter, skip, searching) => {
      try {
        const res = await fetch(`https://dummyjson.com/products${filter}${searching}limit=8&skip=${skip}`)
        return await res.json();
      } catch (error) {
        console.log(error)
      }
    }


 export const fetchCategores = async() => {
        try {
          const res = await fetch(`https://dummyjson.com/products/categories`)
          return await res.json();
        } catch (error) {
          console.log(error)
        }
      }