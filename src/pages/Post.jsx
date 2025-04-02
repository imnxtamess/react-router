import { useParams, useNavigate } from "react-router-dom";
import posts from "../data/posts";
export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const foundPost = posts.find((post) => Number(post.id) === Number(id));

  let lastId = 1;
  posts.forEach((post) => {
    if (post.id > lastId) {
      lastId = post.id;
    }
  });

  return (
    <main>
      <section>
        <div className="container text-center">
          <h1 className="text-white mt-3">{foundPost.title}</h1>
          <div className="text-center mb-3">
            <img
              className="text-center w-25 "
              src={`/${foundPost.image}`}
              alt=""
            />
          </div>

          {foundPost.tags.map((tag, index) => (
            <span key={index} class=" mx-2 badge rounded-pill text-bg-light">
              {tag}
            </span>
          ))}
          <div className="mt-3 p-3 card">{foundPost.content}</div>
        </div>
        <button
          className="carouselBtn left"
          onClick={() => navigate(`/posts/${id >= 2 ? id - 1 : id}`)}
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
          onClick={() =>
            navigate(`/posts/${id < lastId ? Number(id) + 1 : id}`)
          }
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
      </section>
    </main>
  );
}
