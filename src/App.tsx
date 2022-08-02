import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

    useEffect(function () {
      fetch("http://localhost:3001/images")
        .then((resp) => resp.json())
        .then((imagesFromServer) => setImages(imagesFromServer));
    }, []);
  


  return(
    <div className="App">
      <article className="image-card">
        <h2 className="title">Title of image goes here</h2>
        <img src="./assets/image-placeholder.jpg" className="image" />
        <div className="likes-section">
          <span className ="likes">0 likes</span>
          <button className="like-button">♥</button>
        </div>
        <ul className="comments">
          <li>Get rid of these comments</li>
          <li>And replace them with the real ones</li>
          <li>From the server</li>
        </ul>

        <form className="comment-form">
          <input
            className="comment-input"
            type="text"
            name="comment"
            placeholder="Add a comment..."
          />
          <button className="comment-button" type="submit">
            Post
          </button>
        </form>
      </article>
    </div>
  );
}

export default App;
