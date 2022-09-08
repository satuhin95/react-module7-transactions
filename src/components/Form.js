import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {changeTransction, createTransction} from '../features/transction/transctionSlice'
export default function Form() {
    const dispatch = useDispatch();
    const {isLoading,isError,error} = useSelector((state)=>state.transaction)
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [editMode, setEditMode] = useState(false);

    const editing = useSelector((state)=>state.transaction.editing);

    useEffect(()=>{
        const {id,name,amount,type} = editing || {};
        if(id){
            setEditMode(true);
            setName(name);
            setType(type);
            setAmount(amount);
        }else{
            reset();
            setEditMode(false);
        }
    },[editing]);

  

    const reset = ()=>{
        setName('');
        setType('');
        setAmount('');
    }

    const cancleEditMode =()=>{
        setEditMode(false);
        reset();
    }

    const createHandler=(e)=>{
        e.preventDefault();
        dispatch(createTransction({
            name,
            type,
            amount: Number(amount),
        }))
        reset();
    }
    const updatehandler = (e)=>{
        e.preventDefault();
        dispatch(changeTransction({
            id:editing.id,
            data:{
            name,
            type,
            amount: Number(amount),
            }
            
        }))
        setEditMode(false)
        reset();
    }

    
  return (
    <div className="form">
    <h3>Add new transaction</h3>
    <form onSubmit={editMode?updatehandler: createHandler}>
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e=> setName(e.target.value))}
            placeholder="Enter Name"
        />
    </div>

    <div className="form-group radio">
        <label htmlFor="type">Type</label>
        <div className="radio_group">
            <input
                type="radio"
                value="income"
                name="type"
                required
                checked = {type === 'income'}
                onChange={()=>setType('income')}
            />
            <label htmlFor="type">Income</label>
        </div>
        <div className="radio_group">
            <input
                type="radio"
                value="expense"
                name="type"
                placeholder="Expense"
                onChange={()=>setType('expense')}
                checked = {type === 'expense'}
            />
            <label htmlFor="type">Expense</label>
        </div>
    </div>

    <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
            type="number"
            placeholder="300"
            name="amount"
            required
            value={amount}
            onChange={(e=> setAmount(e.target.value))}
        />
    </div>

    <button disabled={isLoading} className="btn" type='submit'>{editMode?'Update Transaction':'Add Transaction'}</button>

    {!isLoading && !isError && <p className='error'>{error}</p>}
    </form>
    {editMode && 
    <button className="btn cancel_edit" type='button' onClick={cancleEditMode}>Cancel Edit</button>}
    
</div>
  )
}
