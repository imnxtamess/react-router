export default function Footer() {
  return (
    <>
      <footer className="bg-dark">
        <div className="container pt-4 text-white">
          <div className="row">
            <div className="col d-flex align-items-start gap-3">
              <a href="/">
                <img className="logo" src="logo.png" alt="" />
              </a>

              <p>
                Tech insights with a refreshing twist. Stay curious. Stay
                inspired."
              </p>
            </div>
            <div className="col">
              <h3>Useful Links 🤓</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="">lorem</a>
                </li>
                <li>
                  <a href="">lorem</a>
                </li>
                <li>
                  <a href="">lorem</a>
                </li>
                <li>
                  <a href="">lorem</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Our Socials 👀</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="">Twitter</a>
                </li>
                <li>
                  <a href="">Instagram</a>
                </li>
                <li>
                  <a href="">Threads</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
