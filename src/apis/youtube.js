import axios from 'axios'
import keys from './keys.json'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        key: keys.youTubeAPI,
        part: 'snippet',
        maxResults: 8,
        videoCategoryId: 10,
        regionCode: 'BR',
        type: 'video'
    }
})