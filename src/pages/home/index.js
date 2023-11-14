import About from "../../components/about";
import Banner from "../../components/banner";
import Brand from "../../components/brand";
import Contact from "../../components/contact";
import Product from "../../components/product";
import Service from "../../components/service";

function Home() {
    return (
        <>
            <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 20px 100px 20px" }}>
                <div style={{ paddingTop: "84px" }} id="home">
                    <Banner />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="service"   >
                    <Service />
                </div>

                <div id="portfolio">
                    <Product />
                </div>
                <div id="contact" >
                    <Brand />
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default Home;