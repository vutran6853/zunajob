const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_KEY;
const app_id = process.env.REACT_APP_ZUNA_ID

const getData = (req, res, next) => {

  axios.get(`http://api.adzuna.com/v1/api/jobs/us/categories?app_id=${ app_id }&app_key=${ process.env.REACT_APP_KEY }&results_per_page=20`)
  .then((response) => {
    console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => console.log(`Dange! Backend ${ error }`));
}

module.exports = {
  getData
}