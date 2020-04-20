import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.png'
import pic02 from '../images/pic01.png'
import pic03 from '../images/pic01.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mission</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            The JFAM Foundation is dedicated to supporting and amplifying often 
            silenced narratives relating to social and criminal justice.
            We believe that every testimony is one worth telling, and inside every 
            journey is a lesson to be shared.
            </p>
          <p>
            In carrying out this mission, we are specifically committed to 
            educating the public about sexual exploitation and trafficking 
            of minors, criminal justice reform, and the welfare of incarcerated 
            individuals. It is our goal that our efforts will serve to empower 
            individuals who are at risk of exploitation or criminal justice 
            system involvement.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            The majority of our work is comprised of dissemination of narratives through 
            public events and messaging across media platforms using materials and 
            methods created by impacted individuals. JFAM also partners with affected 
            individuals and involved organizations to provide support and other resources
            affected by neglect, abuse, abandonment, and/or discrimination. 
          </p>
          <p>
            Our activities include public awareness initiatives, conferences, continuing 
            legal education, consulting services, limited legislative advocacy, curriculum 
            development, and resource allocation.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            The JFAM Foundation is a nonprofit corporation under the Tennessee Nonprofit 
            Corporation Act. JFAM is a public benefit corporation and is organized and 
            operated exclusively for exempt purposes within the meaning of Section 501(c)(3) 
            of the Internal Revenue Code of 1986, as now in effect or as it may be amended 
            in the future. Relevant IRS documentation will be made available upon request.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="j" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/jfamfoundation"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/jfamfoundation" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/jfamfoundation" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
