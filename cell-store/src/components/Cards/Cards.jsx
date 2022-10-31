import React from "react";
import Card from "../Cards/Card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "../Cards/Cards.module.css";
import NotFound from "../../pages/NotFound/NotFound";
import ProductModal from "../Modal/ProductModal/ProductModal";

const Cards = () => {
  const paginados = useSelector((state) => state.product.products2);
  const product = useSelector((state) => state.product.products);
  const user_redux = useSelector((state) => state.user.user);
  const byName = useSelector((state) => state.product.byName);
  return (
    <div className={s.cards}>
      {!product.hasOwnProperty("msj") ? (
        byName === "true" ? (
          product?.map((el) => {
            return (
              <div key={el._id}>
                <Link className={s.link} key={el._id} to={`/detail/${el._id}`}>
                  <Card
                    key={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    id={el._id}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          paginados.products?.map((el) => {
            return (
              <div key={el._id}>
                <Link className={s.link} key={el._id} to={`/detail/${el._id}`}>
                  <Card
                    key={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    id={el._id}
                  />
                </Link>
                {user_redux.admin === true ? (
                  <ProductModal openFormDialog="Editar" product={el} />
                ) : null}
              </div>
            );
          })
        )
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Cards;
