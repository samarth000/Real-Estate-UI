import "./homePage.scss";
import SearchBar from "../../components/navbar/searchBar/searchBar";

function HomePage(){
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                <p>SamEstate offers a seamless platform for buying, selling, and renting properties, with detailed listings, high-quality images, and easy search filters to help you find your perfect home or investment.</p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
                </div>
                </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;