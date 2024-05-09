function getUrl(){
    let hostname=window.location.hostname
    if(hostname=='localhost'){
          return 'http://127.0.0.1:8000/api/'
    }
}
const API_URL=getUrl();
export default{
    POSTS_URL:API_URL+'posts',
    COMMENTS_URL:API_URL+'comments'
}