import React from 'react'
import Cards from '../../components/cards-products/Cards'
import Paginado from '../../components/Paginado/Paginado'
import Filter from '../../components/filter/Filter'
import style from './CardPagination.module.css'
const CardPagination = () => {
  return (
    <div className={style.container}>
        <div className={style.paginado}><Paginado /></div>
          
          <div className={style.div}>
           <Filter/>
          <Cards />
          </div>
      
          <div className={style.paginado}><Paginado /></div>

    </div>
  )
}

export default CardPagination
