import React from 'react'
import Search from './Search'
import { typeFilter ,resetFilter } from '../../features/filter/filterSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
export default function Filter() {
    const dispatch  = useDispatch();

  return (
    <section >
    <div className="flex content-center">
            <div className=''>
            <input type="radio" name='type'   className="default:ring-2 mr-2"  onClick={()=>dispatch(typeFilter(''))}/> All
            <input type="radio" name='type'  className="default:ring-2 mx-2" onClick={()=>dispatch(typeFilter('income'))}/> Income
            <input type="radio"  name='type'  className="default:ring-2 mx-2" onClick={()=>dispatch(typeFilter('expense'))}/>Expense
            
            </div>

        <div className='ml-5'>
             <Search/>
        </div>
        <button className='bg-red-200  ml-5 px-4 py-1   rounded-full cursor-pointer ' onClick={()=>dispatch(resetFilter())} >Reset</button>
        <Link to="/" className='backbtn'>Back</Link>
    </div>
    
 
</section>
  )
}
