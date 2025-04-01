import posts from "../data/posts";
import { useState } from "react";
export default function Home() {
  const [activePost, setActivePost] = useState(0);

  function handleNextClick() {
    console.log("clicked");
    console.log(activePost);
    if (activePost < posts.length - 1) {
      setActivePost(activePost + 1);
    } else {
      setActivePost(0);
    }
  }

  function handlePreviousClick() {
    console.log("clicked");
    console.log(activePost);
    if (activePost > 0) {
      setActivePost(activePost - 1);
    } else {
      setActivePost(posts.length - 1);
    }
  }

  return (
    <main>
      <section>
        <div className="container mt-5">
          <div className="border border-light p-5 mb-4 bg-transparent text-white rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Welcome to Digital Compass!</h1>
              <p className="col-md-8 fs-4">
                Navigate the World of Tech with Confidence. Your guide to the
                latest gadgets, software, and digital trends.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 text-white text-center">
        <div className="container">
          <h1 className="fw-bold">Recent Posts</h1>
          <div className="carousel border border-light p-5 mb-4 bg-transparent text-white rounded-3">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={index === activePost ? "activePost" : "d-none"}
              >
                <h3>{post.title}</h3>
                <div className="img-wrapper">
                  <img src={post.image} alt={post.title} />
                </div>
              </div>
            ))}

            <button
              className="carouselBtn left"
              onClick={() => {
                handlePreviousClick();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
            </button>

            <button
              className="carouselBtn right"
              onClick={() => {
                handleNextClick();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="currentColor"
                class="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
