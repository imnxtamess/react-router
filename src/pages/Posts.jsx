import posts from "../data/posts";

export default function Posts() {
  return (
    <main>
      <section>
        <div className="container my-5">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-5">
            {posts.map((post) => (
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h3>{post.title}</h3>
                  </div>
                  <div className="card-img-top ">
                    <img src={post.image} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
