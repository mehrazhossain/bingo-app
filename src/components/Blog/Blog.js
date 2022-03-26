import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog">
        <h1>How React Works?</h1>
        <p>
          While building client-side apps, a team of Facebook developers
          realized that the DOM is slow (The Document Object Model (DOM) is an
          application programming interface (API) for HTML and XML documents. It
          defines the logical structure of documents and the way a document is
          accessed and manipulated.). So, to make it faster, React implements a
          virtual DOM that is basically a DOM tree representation in JavaScript.
          So when it needs to read or write to the DOM, it will use the virtual
          representation of it. Then the virtual DOM will try to find the most
          efficient way to update the browser’s DOM. Unlike browser DOM
          elements, React elements are plain objects and are cheap to create.
          React DOM takes care of updating the DOM to match the React elements.
          The reason for this is that JavaScript is very fast and it’s worth
          keeping a DOM tree in it to speed up its manipulation. Although React
          was conceived to be used in the browser, because of its design it can
          also be used in the server with Node.js.
        </p>
      </div>
      <div className="blog">
        <h1>What are the differences between props and state?</h1>
        <p>
          The key difference between props and state is that state is internal
          and controlled by the component itself while props are external and
          controlled by whatever renders the component.
        </p>
      </div>
      <div className="blog">
        <h1>How useState Works?</h1>
        <p>
          useState is a Hook that allows you to have state variables in
          functional components. You pass the initial state to this function and
          it returns a variable with the current state value (not necessarily
          the initial state) and another function to update this value.
        </p>
      </div>
    </div>
  );
};

export default Blog;
