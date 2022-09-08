import axios from "../../utility/axios";

export const getTransctions = async (limit,type,search,page)=>{
    let queryString = '';
    console.log(type)
    if(type !==''){
        queryString +=  `type_like=${type}`
    }
    if (search !== '') {
        queryString += `&q=${search}`
    }
    if (page !== '') {
        queryString += `&_page=${page}`
    }
    if(limit !==''){
        queryString += `&_sort=id&_order=desc&_limit=${limit}`;
    }
  
    

    const response = await axios.get(`/transactions?${queryString}`);
    return response.data;
}

export const getTotalTransactions = async ()=>{
    const response = await axios.get(`/transactions`);
    return response.data;
}

export const addTrensction = async(data)=>{
    const response = await axios.post("/transactions",data);

    return response.data;
}
export const editTransction = async(id,data)=>{
    const response = await axios.put(`/transactions/${id}`,data);

    return response.data;
}
export const deleteTransction =async (id)=>{
    const response =  await axios.delete(`/transactions/${id}`);
    return  response.data;
}