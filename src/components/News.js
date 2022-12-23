import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{"status":"ok","totalResults":0,"articles":[],"url":""}]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
        console.log(this.articles);
      }
      async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8e0e4d249d24445295fbf423f88f03ba&pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
        console.log(parseData);
      }
      handleNextPage = async ()=>{
          let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8e0e4d249d24445295fbf423f88f03ba&page=${this.state.page+1}&pageSize=20`;
          let data = await fetch(url);
          let parseData = await data.json()
          this.setState({page:this.state.page+1,articles:parseData.articles})
    }
    handlePrePage = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8e0e4d249d24445295fbf423f88f03ba&page=${this.state.page-1}`;
      let data = await fetch(url);
      let parseData = await data.json()
      this.setState({page:this.state.page-1,articles:parseData.articles})
    
    }
  render() {
    return (
      <div className='container my-3'>
        <h1><strong>SMANews</strong> - Top Headlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div key={element.url}>
                  <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
                </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-outline-danger" onClick={this.handlePrePage}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)?true:false} className="btn btn-outline-success" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
