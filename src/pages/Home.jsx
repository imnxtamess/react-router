export default function Home() {
  return (
    <main>
      <section>
        <div className="container mt-5">
          <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Welcome to Tech & Tonic!</h1>
              <p class="col-md-8 fs-4">
                Welcome to Tech & Tonic, where we share thoughts on technology,
                lifestyle, and creativity. Stay tuned for posts that inspire,
                educate, and entertain!
              </p>
            </div>
          </div>
          <div className="d-flex  mt-5 fw-bold mainbg bg-light rounded-3 flex-column align-items-center gap-5 justify-content-center">
            <div className="d-flex">
              <p>
                Smart insights. Fresh perspectives. Stay ahead with Tech &
                Tonic.
              </p>
              <img src="" alt="" />
            </div>
            <div className="d-flex">
              <img src="" alt="" />
              <p>Exploring the latest in tech, one post at a time.</p>
            </div>
            <div className="d-flex">
              <p>
                Innovation meets inspiration—let’s build the future together.
              </p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
