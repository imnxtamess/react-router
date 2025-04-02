import posts from "../data/posts";
import { Link } from "react-router-dom";
export default function Posts() {
  return (
    <main>
      <section>
        <div className="container my-5">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5">
            {posts.map((post) => (
              <div key={post.id} className="col">
                <Link to={`/posts/${post.id}`} className="card">
                  <div className="card-header">
                    <h3>{post.title}</h3>
                  </div>
                  <div className="card-img-top ">
                    <img src={post.image} alt="" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
