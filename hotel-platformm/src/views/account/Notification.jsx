import { Link } from "react-router-dom";
import "../../styles/home.css"

const NotificationView = () => {

  let handleShow = () => {}

  return (
    <div className="container mb-3">
      <h4 className="my-3">Notification</h4>

    
{/* Explore Fashion Title */}
<div className="bg-info bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">Hotels For You</h4>
        </div>

        {/* Explore Fashion Circles */}
        <div className="container">
          <div className="row"
          >

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
                 <button className="btn btn-info mb-10 claim-btn" onClick={handleShow}>Claim</button>
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
                <button className="btn btn-info mb-10 claim-btn" onClick={handleShow}>Claim</button>
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

                <div className="text-left h6 hotel-name">The Hyde-Out Cafe</div>
                <div className="text-left h6">Cidco</div>
                <button className="btn btn-info mb-10 claim-btn" onClick={handleShow}>Claim</button>
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
                <button className="btn btn-info mb-10 claim-btn" onClick={handleShow}>Claim</button>
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
                <button className="btn btn-info mb-10 claim-btn" onClick={handleShow}>Claim</button>
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

      {/* <div className="list-group">
        <Link
          to="/"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <i className="bi bi-bell-fill" /> Deal Alert!
            </h5>
            <span className="small">
              <i className="bi bi-clock"></i> 2 mins ago
            </span>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
        </Link>
        <Link to="/" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between text-success">
            <h5 className="mb-1">
              <i className="bi bi-tag-fill" /> Coupon Alert!
            </h5>
            <span className="small text-muted">
              <i className="bi bi-clock"></i> 5 hours ago
            </span>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
        </Link>
        <Link to="/" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between text-danger">
            <h5 className="mb-1">
              <i className="bi bi-cash" /> Price dropped!
            </h5>
            <span className="small text-muted">
              <i className="bi bi-clock"></i> 10 hours ago
            </span>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
          <small className="text-muted">Donec id elit non mi porta.</small>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action bg-success text-white"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <i className="bi bi-cash" /> Order Placed
            </h5>
            <span className="small text-white">
              <i className="bi bi-cart-check-fill"></i> 12 hours ago
            </span>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action bg-danger text-white"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <i className="bi bi-cart-x-fill"></i> Order Cancelled
            </h5>
            <span className="small text-white">
              <i className="bi bi-clock"></i> 2 days ago
            </span>
          </div>
          <p className="mb-1">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
        </Link>
      </div> */}
    </div>
  );
};

export default NotificationView;
