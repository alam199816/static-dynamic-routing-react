import React from 'react';
import Header from '../common/Header';
import '../common/content.css';
import { blogsData } from '../Data/blogsData';
import { Link } from 'react-router-dom';

export default function Blog() {
  const allBlog = blogsData.map((v, i) => (
    <div className='blogItems' key={i}>
        <h5>usrId  {v.userId}</h5>
      <h4> id {v.id}</h4>
      <h3>{v.title}</h3>
      <span className='bodyItems'>{v.body}</span>
      <button className='btn'><Link to={`/blog/${v.id}`}>Read more</Link></button>
    </div>
  ));

  return (
    <div>
      <Header />
      <h1>Blog Post</h1>
      <div className='container'>{allBlog}</div>
    </div>
  );
}
