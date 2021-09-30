import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var name = this.props.data.name
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">

         

         <div className="row">
            <div className="eight columns">

               <img className="profile-pic"  src={profilepic} alt="Thomas Karlsson Profile Pic" />

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {city} <br />
						   {state}, {zip}<br />
						   <span><a href="tel:+358401242237">{phone}</a></span><br />
               <span><a href="mailto:tbakerx@gmail.com">{email}</a></span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
