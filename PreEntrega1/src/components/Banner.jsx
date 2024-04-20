import bannerWhisky from "../assets/images/whisky.jpg" 
import bannerHabano from "../assets/images/habano.jpg" 
import bannerRegalos from "../assets/images/regalos.jpg" 

const Banner = () => {
    return (
        <div className="container">
            <div className="row bg-warning">
            <div className="col text-cente">
                <img src= {bannerWhisky} alt="Banner Whisky" className="img-fluid" />
            </div>
            <div className="col text-center">
                <img src= {bannerHabano} alt="Banner Habano" className="img-fluid" />
            </div>
            <div className="col text-center">
                <img src= {bannerRegalos} alt="Banner Regalos" className="img-fluid" />
            </div>
            </div>
        </div>
    )
}
export default Banner;