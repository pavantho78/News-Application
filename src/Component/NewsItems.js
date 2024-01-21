import React from 'react'

const NewsItems=(props)=>{
    let { title, description, imageUrl, newsUrl, author, date, source }=props
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <div style={{ display: 'flex', justifyContent: "flex-end", position: 'absolute', right: "0" }}>
            <span className="badge rounded-pill bg-danger">
              {source}</span></div>
          <img src={!imageUrl ? "https://img.freepik.com/free-vector/realistic-news-studio-background_23-2150026877.jpg?w=996&t=st=1705388379~exp=1705388979~hmac=a806c64b9a72bd54b752665443eb00ae25782a1d2d853eebbb96ac7b2ef2939e" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More..</a>
          </div>
        </div>
      </div>
    )
}
export default NewsItems;