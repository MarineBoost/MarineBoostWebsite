import React from 'react';
import './Blog.css';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const blogs = [
  {
    id: 1,
    title: 'Blog 1',
    content: <ReactPlayer url="https://www.youtube.com/watch?v=s3JkYvf0UqM" />,
  },
  {
    id: 2,
    title: 'Blog 2',
    content: (
      <ReactPlayer url="https://www.youtube.com/watch?v=knOU7zbDRNA&t=119s" />
    ),
  },
  {
    id: 3,
    title: 'Blog 3',
    content: <ReactPlayer url="https://www.youtube.com/watch?v=PAO4KsCgAnw" />,
  },
  {
    id: 4,
    title: 'Blog 4',
    content: <ReactPlayer url="https://www.youtube.com/watch?v=fXkqj77YEcM" />,
  },
  {
    id: 5,
    title: 'Blog 5',
    content: (
      <ReactPlayer url="https://www.youtube.com/watch?v=lx5vOauFiUE&t=4s" />
    ),
  },
  {
    id: 6,
    title: 'Blog 6',
    content: (
      <ReactPlayer url="https://www.youtube.com/watch?v=oKEPsaLEu8U&t=9s" />
    ),
  },
  {
    id: 7,
    title: 'Blog 7',
    content: <ReactPlayer url="https://www.youtube.com/watch?v=vyOMVX3wrL0" />,
  },
  {
    id: 8,
    title: 'Blog 8',
    content: <ReactPlayer url="https://www.youtube.com/watch?v=VhxeMbdDYMU" />,
  },
  {
    id: 9,
    title: 'Blog 9',
    content: (
      <ReactPlayer url="https://www.youtube.com/watch?v=fHZnThjH7dU&t=30s" />
    ),
  },
];

function Blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-row align-items-center justify-content-center text-light">
          <p className="text-center w-75 mb-5">
            Welcome to RSAP4YOU – Your Gateway to Innovation and Excellence,
            where technology meets creativity in a digital odyssey of insightful
            articles, expert perspectives, and success stories, making our blog
            your go-to destination for staying ahead in the ever-evolving tech
            landscape. .
          </p>
        </div>
      </header>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-4 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card.Body className="p-md-5 d-flex flex-column align-items-center">
                    <ReactPlayer
                      url={blog.content.props.url}
                      width={364}
                      height={264}
                    />
                  </Card.Body>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
