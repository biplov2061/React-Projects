import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="image/Nike-Logo.png"
            alt="logo"
            width={"100px"}
            height={"50px"}
          />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>

      <div className="container">
        <div className="cont-left">
          <h1>YOUR FEET</h1>
          <h1>DESERVES</h1>
          <h1>THE BEST</h1>
          <br />
          <p>Your feet deserves best and We are here</p>
          <p>Help you with our shoes. Your feet deserves</p>
          <p>The Best and We are here to give best shoe.</p>
          <br />
          <div className="button">
            <button id="shop">Shop Now</button>
            <button id="category">Category</button>
          </div>
          <br />
          <span>Also Available On :</span>
          <div className="flipcart_amazon">
              <div className="flipcart">
              <a href="www.flipcart.com"><img id="flipcart" src="/image/flipcart-removebg-preview.png" alt="flipcart" /></a>
              </div>
             <div className="amazon">
             <a href="www.amazon.com"><img id="amazon" src="/image/amazon-removebg-preview.png" alt="amazon " /></a>
             </div>
          </div>
        </div>
        <div className="cont-image">
          <img id="nike" src="/image/nike-removebg-preview.png" alt="nike shoe" />
        </div>
      </div>
    </>
  );
};

export default App;
