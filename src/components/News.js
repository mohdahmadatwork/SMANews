import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: 'in',
    pagesize: 10
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number
  }
  articles = []
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults:0
    }
    console.log(this.articles);
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - SMANews`
  }
  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e0e4d249d24445295fbf423f88f03ba&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
    console.log(parseData);
    this.setState({ loading: false })
  }
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e0e4d249d24445295fbf423f88f03ba&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json()
    // this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
    // console.log(parseData);
    // this.setState({loading:false})
    this.updateNews();

  }
  handleNextPage = async () => {
    // this.setState({loading:true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e0e4d249d24445295fbf423f88f03ba&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    // let data = await fetch(url);
    // let parseData = await data.json()
    // this.setState({page:this.state.page+1,articles:parseData.articles,loading:false})
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }
  handlePrePage = async () => {
    // this.setState({loading:true})
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e0e4d249d24445295fbf423f88f03ba&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    // let data = await fetch(url);
    // let parseData = await data.json()
    // this.setState({page:this.state.page-1,articles:parseData.articles,loading:false})   
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  fetchMoreData= async ()=> {
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8e0e4d249d24445295fbf423f88f03ba&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults })
    console.log(parseData);
  };
  render() {
    return (
      <>
        <h1><strong>SMANews</strong> - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
        <div className="container">
            <div className="row">
            {this.state.articles.map((element) => {
              return <div key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
              </div>
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-outline-danger" onClick={this.handlePrePage}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)?true:false} className="btn btn-outline-success" onClick={this.handleNextPage}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
