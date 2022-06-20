import CloseIcon from '@mui/icons-material/Close'
import React from 'react'
import './shoppingListItem.css'

function ShoppingListItem({title, icon}) {
  return (
    <div className="shoppingListItem" >
        <h3>{title}</h3>
        {icon ? <CloseIcon className="icon"  /> : "" }
    </div>
  )
}

export default ShoppingListItem