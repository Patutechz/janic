import AboutUs from "../assets/img/ship-6794508_1280.jpg";
const About = () => {
    return ( <>
        <section class="hero has-text-centered is-halfheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-9 has-text-centered mt-6">
                  <h1 class="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-weight-boldd"
                      style={{fontWeight: "900"}}>About Us</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="hero-foot"><div class="container"></div></div>
        </section>
        <section className="section has-background-white">
        <div className="container">
          <div className="columns is-centeredd is-vcentered is-multiline">
            <div className="column is-5 is-offset-1">
            <h1 className="title has-text-weight-bold">About Us</h1>
            <hr
                className="my-3 has-background-primary"
                style={{width: "48px", height: "4px"}}
              />
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid distinctio quis, tempore modi impedit ducimus incidunt in minima odit officia, debitis laboriosam delectus deleniti sequi voluptas iusto esse ipsa.
              </p>
            </div>
            <div className="column is-5 is-offset-1">
              <div className="image mx-auto">
                <img className="is-roundedd" src={AboutUs} alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </> );
}
 
export default About;