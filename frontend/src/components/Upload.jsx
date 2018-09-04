import React from 'react';
import Moment from 'react-moment';

let DateNow = Date.now(); //So I can gaze upon moment formatting i guess

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      textValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewPage = this.handleNewPage.bind(this);
  }

  handleChange(event) {
    this.setState({ textValue: event.target.value});
  }

  handleNewPage(event) {
    event.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadImage.files[0]);
    data.append('filename', Date.now());
    data.append('text', this.textValue.value);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Upload a New Page</h1>
        <form onSubmit={this.handleNewPage}>
          <div>
            <input ref={(ref) => { this.uploadImage = ref; }} type="file" />
          </div>
          <br />
          <label>
          <textarea ref={(ref) => { this.textValue = ref; }} type="text" 
           cols="40" rows="5"
          placeholder="Enter anything you'd like to say on this page here" />
          </label>
          <br />
          <div>
            <button>Submit</button>
          </div>
            {this.state.imageURL.length > 0 &&
          <img src={this.state.imageURL} alt="Last upload" />
            }
        </form>
        <p>Time <Moment format="YYYYMMDDHHmmss">{DateNow}</Moment></p>
      </div>
    );
  }
}

export default Upload;