import axios from 'axios'
import keys from './keys.json'

export default axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2/',
    params: {
        apikey: keys.ticketMasterDiscoveryAPI
    }
})