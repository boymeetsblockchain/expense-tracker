import GlobalContext from "../context/Globalstate"
import Transaction from "./Transaction"
import {useContext} from 'react'

function TransactionList() {
  const {transactions} = useContext(GlobalContext)
  return (
     <>
     <h3>History</h3>
      <ul  className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id}  transaction={transaction}/>))} 
      </ul></>
   
  )
}

export default TransactionList
