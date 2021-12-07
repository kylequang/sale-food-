
import axios from 'axios';
//mock API
let API_URL = 'https://600a50df778d1a0017793a0d.mockapi.io/ai/';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}