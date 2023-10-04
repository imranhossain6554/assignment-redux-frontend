 
import bg from "../../assets/images/bg-1.jpg"; 
import { Link } from "react-router-dom";

export default function HeroBanner() { 
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center top",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to our awesome Book Catalog
            </h1>
            <p className="mb-5">
              There are lots of book here. You can choose any kind of book and
              read. Every latest book available ours.
            </p>
            <Link to="/all-books">
              <button className="btn btn-primary">All Books</button>
            </Link>

            {/* redux */}
            {/* <div className="mt-12 py-12">
              <button
                onClick={() => dispatch(increment())}
                className="btn btn-primary"
                aria-label="Increment value"
              >
                Increment
              </button>
              <span className="px-4">{count}</span>
              <button
                onClick={() => dispatch(decrement())}
                className="btn btn-secondary"
                aria-label="Decrement value"
              >
                Decrement
              </button>
            </div> */}
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
}
