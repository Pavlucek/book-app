import { useState } from "react/cjs/react.development";
import React from "react"; // Ensure React is imported
import Modal from "./Modal";
const Card = ({ book }) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book)
    return (
        <>
            {
                // eslint-disable-next-line array-callback-return
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !==undefined)
                    {
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">{amount} zł</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }

        </>
    )
}
export default Card;