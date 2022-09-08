import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchTransactions } from '../../features/transction/transctionSlice';
import Transaction from './Transaction'

export default function Transactions() {
  const dispatch = useDispatch();
  // const {limit } = useSelector((state)=>state.filter.pagination)
  const { type,search,pagination:{currentPage}} = useSelector((state)=>state.filter)
   let limit =5;
  useEffect(()=>{
    dispatch(fetchTransactions({limit,type,search,currentPage}))
  },[dispatch,limit,type,search,currentPage])
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
    <p className="second_heading">Your Transactions:</p>

<div className="conatiner_of_list_of_transactions">
    <ul>
        {content}
    </ul>
</div>
    <Link to="/all" className='viewbtn'>View All</Link>

    
    </>
  )
}
