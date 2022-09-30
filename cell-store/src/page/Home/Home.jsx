import React from "react";
import SearchBar from "../../components/searchBar/searchBar";
import { getAllProducts ,getProductsPerPage} from "../../redux/actions";
import * as s from "../Home/Home.module.css";
import Cards from "../../components/cards-products/Cards";
import Footer from "../../components/footer/Footer";
import Paginado from "../../components/Paginado/Paginado";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const page = useSelector((state)=>state.page)
  const products2 = useSelector((state)=>state.products2)
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsPerPage(page));
  }, [dispatch,page]);

  {console.log(products.length)
}
  return (
    <div>
      <SearchBar />
      <div className={s.container}>

        <h1>Productos</h1>
        <div className={s.cards}>
          {products2.products?.map((el) => {
            return (
              <div key={el._id}>
                <Link key={el._id} to={`/detail/${el._id}`}>
                  <Card
                    key={el._id}
                    name={el.name}
                    image={el.image}
                    price={el.price}
                  />
                </Link>
                
              </div>
            );
          })}
            <Paginado 
            products = {products.length}
            />
            <Footer/>
        </div>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
