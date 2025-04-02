import { useParams, useNavigate } from "react-router-dom";
import posts from "../data/posts";
export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const foundPost = posts.find((post) => Number(post.id) === Number(id));

  console.log(foundPost);
  return (
    <main>
      <section>
        <div className="container">
          <h1>{foundPost.title}</h1>
        </div>
      </section>
    </main>
  );
}
