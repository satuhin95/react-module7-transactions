import React from 'react'
import { useDispatch } from 'react-redux';
import deleteImg from '../../assets/images/delete.svg'
import editImg from '../../assets/images/edit.svg'
import { editActive, removeTransction } from '../../features/transction/transctionSlice';
import numberWithCommas from '../../utility/numberWithComa';
export default function Transaction({item}) {
    const {id,name,type,amount} = item;
    const dispatch = useDispatch();

    const handelEdit = ()=>{
        dispatch(editActive(item))
    }
    const handleDelete =()=>{
        dispatch(removeTransction(id))
    }
  return (
    <>
    <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {numberWithCommas(amount)}</p>
                <button className="link" onClick={handelEdit}>
                    <img alt='edit'
                        className="icon"
                        src={editImg}
                        
                    />
                </button>
                <button className="link" onClick={handleDelete}>
                    <img alt='delete'
                        className="icon"
                        src={deleteImg}
                    />
                </button>
            </div>
        </li>
    
    </>
  )
}
