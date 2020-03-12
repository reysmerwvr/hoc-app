import React from 'react';
import withDataFetching from '../hoc/withDataFetching'
import './App.css';

const App = ({ data }) => (
  <ul>
    {data.map(post =>  <li key={post.id}>{post.title}</li> )}
  </ul>
)

export default withDataFetching('https://jsonplaceholder.typicode.com/posts', App)
