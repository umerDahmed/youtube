import axios from 'axios';

const KEY = 'AIzaSyBNwuGo_MKSlojvSOpUhndpkec3CJ2yGXg';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults : 10,
        key:KEY
    }

})