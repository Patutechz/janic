const Contact = () => {
    return ( <>
        <section className="hero has-text-centered is-halfheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-9 has-text-centered mt-6">
                  <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-weight-boldd"
                      style={{fontWeight: "900"}}>Contact Us</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section has-background-white">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5 is-offset-1">
              <h1 className="title">Have a question? Let’s talk</h1>
              <form>
                <div className="columns is-centered">
                  <div className="column is-half">
                    <div className="field">
                      <label className="label has-text-weight-semibold">
                        Full name
                      </label>
                      <div className="control is-expanded">
                        <input
                          className="input"
                          name="name"
                          type="text"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-half">
                    <div className="field">
                      <label className="label has-text-weight-semibold">
                        Email
                      </label>
                      <div className="control is-expanded">
                        <input
                          className="input"
                          name="email"
                          type="email"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column">
                    <div className="field">
                      <label className="label has-text-weight-semibold">
                        Message
                      </label>
                      <div className="control is-expanded">
                        <textarea
                          className="textarea is-large"
                          name="details"
                          rows="5"
                          required=""
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-one-third">
                    <div className="field">
                      <div className="control">
                        <button className="button is-link is-fullwidth">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-5 is-offset-1">
              <h1 className="title">Contact Info</h1>
              <div className="mb-4">
                <p className="title is-5 has-text-dark">Address</p>
                <p className="subtitle is-6 has-text-grey">
                  33 street Rumuodara, Port
                  Harcourt, Rivers State
                </p>
              </div>
              <div className="mb-4">
                <p className="title is-5 has-text-dark">Email Us</p>
                <p className="subtitle is-6 has-text-grey">
                  info@patutek.com
                </p>
              </div>
              <div className="mb-4">
                <p className="title is-5 has-text-dark">Call Us</p>
                <p className="subtitle is-6 has-text-grey mb-1">+2341234567890</p>
                <p className="subtitle is-6 has-text-grey">+2341234567890</p>
              </div>
              <div className="mb-4">
                <p className="title is-5 has-text-dark">Follow Us</p>
                <div className="buttons mt-4">
                  <a
                    href="https://www.facebook.com"
                    className="button  is-primary is-outlinedd"
                    style={{borderRadius : "9999px"}}
                  >
                    <span className="icon">
                      <i className="fab fa-facebook"></i>
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="button  is-primary is-outlinedd"
                    style={{borderRadius : "9999px"}}
                  >
                    <span className="icon">
                      <i className="fab fa-instagram"></i>
                    </span>
                  </a>
                  <a
                    href="https://bit.ly/patutek"
                    className="button  is-primary is-outlinedd"
                    style={{borderRadius : "9999px"}}
                  >
                    <span className="icon">
                      <i className="fab fa-whatsapp"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </> );
}
 
export default Contact;