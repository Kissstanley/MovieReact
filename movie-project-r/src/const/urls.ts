const baseURL = process.env.REACT_APP_API

const movies='/discover/movie'
const genres='/genre/movie/list'
const info='/movie'
const imageBase='https://image.tmdb.org/t/p/w500'

const urls ={
    movies:{
        base:movies,
        byId:(id:string)=>`${info}/${id}`
    },
    genres,
    imageBase
}

export {
    baseURL,
    urls,
    imageBase
}