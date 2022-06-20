import React from 'react'
import './shopping.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

function Shopping() {
  return (
    <div className="shopping" >
        <div className="shoppingWrapper">
            <h1>Shopping List</h1>

            <form >
                <input type="text"  placeholder="Add Item"/>
                <button type="submit" className="shoppingButton">
                    <span className="send">Send</span>
                    <SendOutlinedIcon />
                </button>
            </form>

            <div className="shoppingSort" >
                <button>Sort By Date</button>
                <button>Sort By Name</button>
            </div>

            <div className="shoppingList" >              
                <ShoppingListItem title="Milk" icon />
                <ShoppingListItem title="Milk" icon />
                <ShoppingListItem title="Milk" icon />
                <ShoppingListItem title="Milk" icon />
                <ShoppingListItem title="Milk" icon />
            
            </div>
        </div>
    </div>
  )
}

export default Shopping