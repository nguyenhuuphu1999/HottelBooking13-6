import "antd/dist/antd.css";
import "./style.scss";
import  NearbyPlaces from'./Containers/ NearbyPlaces'
import WheelEvent from './Containers/ Wherever'
import BeautifulNature from './Containers/ BeautifulNature'
import ExploringExperience from './Containers/ExploringExperience'


function Home() {
  return (
    <div>
      <div>
        <NearbyPlaces/>
      </div>
      <div>
        <WheelEvent/>
      </div>
      <div>
        <BeautifulNature/>
      </div>
      <div>
        <ExploringExperience/>
      </div>
    </div>
  );
}

export default Home;
