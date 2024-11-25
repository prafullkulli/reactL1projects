import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'


export const TrasactionList = () => {
    const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">

        {/* <li className="minus">
            Cash<span>-$400</span>
            <button className="delete-btn">x</button>
        </li> */}
        {/* use map to display list */}

        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  )
} 
