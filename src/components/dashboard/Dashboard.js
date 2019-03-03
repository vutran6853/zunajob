import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // recommendJobListData: [],
      jobCategoriesData: [],
     };
  }

  componentDidMount() {
    axios.get('/api/getData')
    .then((response) => {
      // console.log(response.data);
      this.setState({ jobCategoriesData: response.data.results })
    })
    .catch((error) => console.log(`Dange! Front end ${ error }`));
  }

  displayCategories() {
    let { jobCategoriesData } = this.state;
    console.log(jobCategoriesData.)
    if(jobCategoriesData.length)

    // if(jobCategoriesData.lenth === 1) {
    //   console.log(true, 'is undefined')
    // } else {
    //   console.log(false)
    //   return jobCategoriesData.results.map((value, index) => {
    //     console.log(value, index)
    //     return(
    //       <div>
    //         <p>category: { value.category.label }</p>
    //         <p>company: { value.company.display_name }</p>
    //         <p>created: { value.created }</p>
    //         <p>description: { value.description }</p>
    //         <p>title: { value.title }</p>
    //         <a href={ value.redirect_url } target='_blank'>link</a>
    //       </div>
    //     )
    //   })
    // }

  }

  render() {
    return (
      <div>
        <p>Dashboard page</p>
        { this.displayCategories() }
      </div>
    );
  }
}

export default Dashboard;