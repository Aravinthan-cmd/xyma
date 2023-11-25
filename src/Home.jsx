import "../src/home.css";
import xyma_logo from "../src/assets/xyma_logo.png";
import vedanta_logo from "../src/assets/vedanta_balco-removebg.png";
import cumi from "../src/assets/cumi.png";
import iocl from "../src/assets/Indian-Oil.png";
import ega from "../src/assets/ega-removebg-preview.png";
import schneider from "../src/assets/schneider-electric-logo-png-transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const handleLink = (link) => {
    const vedanta_link = "https://vedanta.xyma.live/";
    const cumi_link = "https://cumi.xyma.live/";
    console.log(link);

    switch (link) {
      case "vedanta":
        window.location.href = vedanta_link;
        break;
      case "cumi":
        window.location.href = cumi_link;
        break
      default:
        console.log("Nothing is selected");
        break;
    }

  };
  return (
    <div className="home">
      <div className="logo">
        <img src={xyma_logo} alt="xyma-logo" className="xyma_logo" />
      </div>

      <div className="container">
        <div className="box vedanta" onClick={()=>{handleLink('vedanta')}}>
            <div className="live">
            </div>
          <img src={vedanta_logo} alt="" className="vedanta_logo" />
          <h3>Adithiya Birla Group vedanta</h3>
        </div>
        <div className="box cumi" onClick={()=>{handleLink('cumi')}}>
          <img src={cumi} alt="cumi" className="cumi_logo" />
          <h3>Murugappa Group cumi</h3>
        </div>
        <div className="box ega">
          <img src={ega} alt="ega" className="ega_logo" />
          <h3>EGA</h3>
        </div>
        <div className="box iocl">
          <img src={iocl} alt="iocl" className="iocl_logo" />
          <h3>IOCL Haldia</h3>
        </div>
        <div className="box schneider">
          <img src={schneider} alt="schneider" className="schneider_logo" />
          <h3>Schneider</h3>
        </div>
        <div className="box unkown">
          {/* <h3></h3> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
