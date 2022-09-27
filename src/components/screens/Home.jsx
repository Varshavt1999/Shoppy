import React from "react";
import Bg from "../../assets/images/bg.jpg";
import Products from "./Products";

function Home() {
    return (
        <div>
            <div class="card text-bg-dark">
                <img
                    src={Bg}
                    class="card-img"
                    alt="background"
                    height={"650px"}
                />
                <div class="card-img-overlay">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0">
                            New Season Arrivals
                        </h5>
                        <p class="card-text lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home;
