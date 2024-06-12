import Navigation from "./Carousel";
import Filters from "./Filter";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";

const Body = () => {
    return(
      <>
      <div className='text-center'>This is body component</div>
      <Navigation/>
      <div className='d-flex justify-content-between'>
        <Filters/>
        <Searchbar/>
      </div>
      <Cardcontainer/>
      </>
    )
  }

  export default Body;