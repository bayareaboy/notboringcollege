import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>NotBoringCollege</h1>
                  <h2>It's time to elevate your College Experience</h2>
                  <p>Engage, Learn, Meet with other students NOW</p>

                  <hr />
                  <Link
                    to="/register"
                    className="btn btn-lg btn-secondary mr-2"
                  >
                    Sign Up
                  </Link>
                  <Link to="/login" className="btn btn-lg btn-light">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="events">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Upcoming Events</h2>
                <hr />
                There are not active events at this moment. Check back later....
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="overlay" />
                <div className="become-creator shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="creator-content text-md-center ">
                    <h2> ❤️ making Videos? </h2>
                    <p>Join Our Team to Create Content</p>

                    <br />
                    <hr />
                    <h2>Open positions:</h2>
                    <p> Social Media managers: IG, SnapChat, FB</p>
                    <b4>
                      Shoot us an email --{" "}
                      <strong>notboringcollege@gmail.com</strong>
                    </b4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
