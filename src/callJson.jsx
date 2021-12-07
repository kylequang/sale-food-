import axios from 'axios';

//Json
let API_URL = 'http://localhost:3000';

   export default async function  callJson(endpoint, method = 'GET', body) {
        return await  axios({
           method,
           url: `${API_URL}/${endpoint}`,
           data: body
       })
}
