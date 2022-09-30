import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../redux/actions";
import s from "../Paginado/Paginado.module.css"


export default function({products}){
    let limit = 8

    const dispatch = useDispatch()
   
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(products/limit); i++) {
        
        pageNumbers.push([i])
        
    }

    function handlePage(e){
        e.preventDefault()
        dispatch(changePage(e.target.value))
        

    }

    return(
        <div className={s.container}>
            <ul>
                <div className={s.subcontainer}>
                {
                    pageNumbers && pageNumbers.map(n=>{
                        return (
                            <li className={s.paginado} value={n} onClick={e=>handlePage(e)}>{n}</li>
                        )
                    })
                }
                </div>
            </ul>

        </div>
    )
}