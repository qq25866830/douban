
import http from 'utils/http.js'
 
//movie里面的
export const getMovieNow = ()=>http('get','/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0')

export const getMovieepisode = ()=>http('get','/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&start=0&count=8&loc_id=108288&_=0')

export const getMovieNew =()=>http('get','/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&start=0&count=8&loc_id=108288&_=0')

