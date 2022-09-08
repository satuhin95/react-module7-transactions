import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Transaction from '../components/transaction/Transaction'
import { fetchTransactions } from '../features/transction/transctionSlice';
import Balance from '../components/Balance'
import Form from '../components/Form'
import Pagination from '../components/ui/Pagination';
import Filter from '../components/ui/Filter';
import { Link } from 'react-router-dom';

export default function AllTransaction() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let limit =10;
  const { type,search} = useSelector((state)=>state.filter)
  // const { type,search,pagination:{currentPage}} = useSelector((state)=>state.filter)
  useEffect(()=>{
    dispatch(fetchTransactions({limit,type,search,page}))
  },[dispatch,limit,type,search,page])
  const {isLoading,isError,error,transactions} = useSelector((state)=>state.transaction);
 
  let content = null;
  if(isLoading) content = <p className='error'>Loading...</p>
  if(!isLoading && isError) content = <p className='error'>{error}</p>
  if(!isLoading && !isError && transactions.length >0){
   content = transactions.map((item)=>(
      <Transaction key={item.id} item={item}/>
    ))
   }
   if(!isLoading && !isError && transactions.length ===0){
    content = <p>Data Not Found!</p>
    }
  return (
    <>
    <Balance/>
    <Form/>
    <div className='flex content-center'>
           <p className="second_heading">All Transactions:</p>
        
     </div>
     <Filter/>
    <div className="conatiner_of_list_of_transactions">
        <ul>
            {content}
        </ul>
    </div>
    <Pagination  setPage={setPage} />
    </>
  )
}
