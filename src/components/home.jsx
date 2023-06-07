import Categories from "./categories";
import '../styles/categories.css';
import Banner from "./banner";
import Videos from "./videos";

const Home = () => {
    return ( 
        <div className="home">
            <Categories />
            <Banner/>
            <Videos />
        </div>
      );
}
 
export default Home;