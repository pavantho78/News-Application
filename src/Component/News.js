import React from 'react'
import { useEffect,useState } from 'react';
import NewsItems from './NewsItems';
import "./News.css"
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>{
      const[articles,setArticles]=useState([]);
      const[loading,setLoading]=useState(true);
      const[page,setPage]=useState(1);
      const[totalResults,setTotalResults]=useState(0);

     const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

  

    const updateNews = async()=>{
        console.log("updated")
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData);
         setArticles(parsedData.articles)
         setTotalResults(parsedData.totalResults)
         setLoading(false)
        props.setProgress(100);
    }

     useEffect(()=>{
        console.log("UseEffect");
        //eslint-disable-next-line
        document.title = `${capitalizeFirstLetter(props.category)}-NewsZ App-Get your daily dose of news for free!`
        updateNews();
     },[])
   
    /*const  handlePreClick = async () => {
        console.log("Previous");
        setPage(page - 1 )
        updateNews();
    }

    const handleNextClick = async () => {
        console.log("Next");
        setPage(page + 1 )
        updateNews();
    } */

     const fetchMoreData = async() => {
         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
         setPage(page + 1 )
         let data = await fetch(url);
         let parsedData = await data.json();
         console.log(parsedData);
         setArticles(articles.concat(parsedData.articles))
         setTotalResults(parsedData.totalResults)
         setLoading(false)
       

      };
        return (
            <>
            <div className='One'>
                    <h2 className='text-center' style={{ margin: "30px 0px" }}>NewsZ-Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                    {loading && <Spinner/>}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner/>}
                    >
                        <div className='container'>
                        <div className='row'>
                            {articles.map((element,index) => {
                                return (
                                    <div className='col-md-3' key={index}  >
                                        <NewsItems title={element.title ? element.title.slice(0, 51) : ""} description={element.description ? element.description.slice(0, 92) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                )
                            })
                            }
                        </div>
                        </div>
                    </InfiniteScroll>
                    {/*
                      <div className="container d-flex justify-content-between">
                      <button type="button" disabled={page<=1} onClick={handlePreClick} className="btn btn-danger">&larr; Previous</button>
                      <button type="button" disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} onClick={handleNextClick} className="btn btn-danger">Next &rarr</button>
                      </div>
                    */}
            </div>
            </>
        )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}



export default News;
