import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source } = this.props;
    return (
      <div className='p-2'>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imageUrl ? imageUrl : "https://c.ndtvimg.com/2022-12/uaru3ok_paris-generic_625x300_23_December_22.jpg"} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success " style={{left:"97%"}}>
                {source}
              </span>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank"><button type="button" className="btn btn-outline-info"  >Read More...</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
