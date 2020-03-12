import React, { Component } from 'react'
// import useData from '../components/useData';


export default function withDataFetching(endpoint, WrappedComponent) {
  // Using Hooks
  // return (props) => {
  //   const [data] = useData();
  //   return <WrappedComponent data={data} {...props} />
  // }
  // Using React Lifecycle
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = { data: [] }
    }

    componentDidMount() {
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          this.setState({ data })
        })
        .catch(err => console.log(err.message))
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}