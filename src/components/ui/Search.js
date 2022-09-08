import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searched } from '../../features/filter/filterSlice';

export default function Search() {
    const {search} = useSelector(state=>state.filter);
    const [input,setInput] = useState(search);
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(searched(input));
        setInput('');
    }
  return (
    <form onSubmit={handleSubmit}>
    <input
        className="outline-none border-2 border-green-900"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
    />
</form>
  )
}
