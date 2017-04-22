const React = require('react');

const Contact = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    console.log('submit accepted');
  },
  render: function () {
    return (
      <div>
        <h1 className="main-title">Contact</h1>
        <form ref="form" onSubmit={this.onSubmit}>
          <label>
            Email:
            <input type="text" ref="email" placeholder="Enter Your Email..."/>
          </label>
          <label>
            Message:
            <textarea ref="subject" placeholder="Enter Your Message..." rows="3"></textarea>
          </label>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
});


module.exports = Contact;
