import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";
import { ReactComponent as IconLaptop } from "bootstrap-icons/icons/laptop.svg";
import { ReactComponent as IconHeadset } from "bootstrap-icons/icons/headset.svg";
import { ReactComponent as IconPhone } from "bootstrap-icons/icons/phone.svg";
import { ReactComponent as IconTv } from "bootstrap-icons/icons/tv.svg";
import { ReactComponent as IconDisplay } from "bootstrap-icons/icons/display.svg";
import { ReactComponent as IconHdd } from "bootstrap-icons/icons/hdd.svg";
import { ReactComponent as IconUpcScan } from "bootstrap-icons/icons/upc-scan.svg";
import { ReactComponent as IconTools } from "bootstrap-icons/icons/tools.svg";
import "../styles/home.css";
import StaticExample from "../components/StaticExample";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));
const Carousel = lazy(() => import("../components/carousel/Carousel"));
const CardIcon = lazy(() => import("../components/card/CardIcon"));
const CardLogin = lazy(() => import("../components/card/CardLogin"));
const CardImage = lazy(() => import("../components/card/CardImage"));
const CardDealsOfTheDay = lazy(() =>
  import("../components/card/CardDealsOfTheDay")
);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currHotel: "",
    };
  }

  components = {
    IconLaptop: IconLaptop,
    IconHeadset: IconHeadset,
    IconPhone: IconPhone,
    IconTv: IconTv,
    IconDisplay: IconDisplay,
    IconHdd: IconHdd,
    IconUpcScan: IconUpcScan,
    IconTools: IconTools,
  };

  render() {
    const iconProducts = data.iconProducts;
    const rows = [...Array(Math.ceil(iconProducts.length / 4))];
    // chunk the products into the array of rows
    const productRows = rows.map((row, idx) =>
      iconProducts.slice(idx * 4, idx * 4 + 4)
    );
    // map the rows as div.row
    const carouselContent = productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
          {row.map((product, idx) => {
            const ProductImage = this.components[product.img];
            return (
              <div key={idx} className="col-md-3">
                <img className="cat-img" src={product.img} />
                {/* <CardIcon
                  title={product.title}
                  text={product.text}
                  tips={product.tips}
                  to={product.to}
                >
                  <ProductImage className={product.cssClass} width="80" height="80" />
                </CardIcon> */}
              </div>
            );
          })}
        </div>
      </div>
    ));

    const handleClose = () => {
      this.setState({ show: false });
    };
    const handleShow = (e) => {
      console.log(e.target.parentElement.children[0].textContent);
      this.setState({
        show: true,
        currHotel: e.target.parentElement.children[0].textContent,
      });
    };

    return (
      <React.Fragment>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        {/* <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-md-9">
              <Carousel id="elect-product-category" className="mb-3">
                {carouselContent}
              </Carousel>
              <Support />
            </div>
            <div className="col-md-3">
              <CardLogin className="mb-3" />
              <CardImage src="../../images/banner/Watches.webp" to="promo" />
            </div>
          </div>
        </div> */}

        {/* Explore Fashion Title */}
        <div className="bg-info bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">Hotels For You</h4>
        </div>

        {/* Explore Fashion Circles */}
        <div className="container">
          <div className="row">
            {/* hotel item */}
            <div className="col-md-3 hotel-item hotel-item">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/pictures/5/19309515/c0dd462ce7ab6dcb6eac68a7851f7ebb.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Uptown 501</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3 hotel-item">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/pictures/0/19677870/2d8c67d4601368b2e89e6f777e74d0bf.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Whisk</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3 hotel-item">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/reviews_photos/f6c/6dce5dca57e06a5bee4c63e2f577ff6c_1541735398.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">
                    The Hyde-Out Cafe
                  </div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3 hotel-item">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/pictures/5/2500125/1ad8845079f656eb157b897801b5cb86.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Atithi</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3 hotel-item">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://lh3.googleusercontent.com/p/AF1QipMINXmK3OO9ilLkKcBQLB9vkSddvyPTJ8YIWGAp=s1360-w1360-h1020"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Jamun Tree</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>

            {/* <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/female.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Women's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/smartwatch.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Smartwatch</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/footwear.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Footwear</div>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Deals of The Day */}
        <div className="container-fluid bg-light mb-3">
          <div className="row">
            <div className="col-md-12">
              <CardDealsOfTheDay
                endDate={Date.now() + 1000 * 60 * 60 * 14}
                title="Categories"
                to="/"
              >
                <Carousel id="elect-product-category1">
                  {carouselContent}
                </Carousel>
              </CardDealsOfTheDay>
            </div>
          </div>
        </div>

        {/* Explore Fashion Title */}
        <div className="bg-info bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">Top Hotels</h4>
        </div>

        {/* Explore Fashion Circles */}
        <div className="container">
          <div className="row">
            {/* hotel item */}
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/pictures/5/19309515/c0dd462ce7ab6dcb6eac68a7851f7ebb.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Uptown 501</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/pictures/0/19677870/2d8c67d4601368b2e89e6f777e74d0bf.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Whisk</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/reviews_photos/f6c/6dce5dca57e06a5bee4c63e2f577ff6c_1541735398.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">
                    The Hyde-Out Cafe
                  </div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://b.zmtcdn.com/data/pictures/5/2500125/1ad8845079f656eb157b897801b5cb86.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Atithi</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>
            {/* hotel item */}
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none hotel-col">
                <img
                  // src="../../images/category/male.webp"
                  src="https://lh3.googleusercontent.com/p/AF1QipMINXmK3OO9ilLkKcBQLB9vkSddvyPTJ8YIWGAp=s1360-w1360-h1020"
                  className="img-fluid hotel"
                  alt="..."
                />
                <div className="hotel-content">
                  <div className="text-left h6 hotel-name">Atithi</div>
                  <div className="text-left h6">Cidco</div>
                  <button
                    className="btn btn-info mb-10 claim-btn"
                    onClick={handleShow}
                  >
                    Claim
                  </button>
                </div>
              </Link>
            </div>

            {/* <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Men's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/female.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Women's Clothing</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/smartwatch.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Smartwatch</div>
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="/" className="text-decoration-none">
                <img
                  src="../../images/category/footwear.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Footwear</div>
              </Link>
            </div> */}

            <Modal show={this.state.show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Hotel Booking</Modal.Title>
              </Modal.Header>
              <Modal.Body>{`Do You want to book a table at ${this.state.currHotel}`}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  No
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
