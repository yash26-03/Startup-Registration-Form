var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div className="container">
            <div className="title">Registration</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Name of the startup</span>
                    <input type="text" placeholder="Enter startup name" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Team Leader</span>
                    <input type="text" placeholder="Enter your username" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Leaders Email-id</span>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <span className="details"> Leaders Phone Number</span>
                    <input type="text" placeholder="Enter your number" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="text" placeholder="Enter your password" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input type="text" placeholder="Enter your Confirm password" required />
                  </div>
                  <div action="/action_page.php">
                    <span className="details">Attach Proposal</span>
                    <input type="file" id="myFile" name="filename" />
                  </div>
                </div>
               
                <div className="button">
                  <input type="submit" defaultValue="Register" />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  });