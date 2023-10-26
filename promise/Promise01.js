const axios = require('axios');

axios.get('https://ipinfo.io')
    .then(res => {
        const {data} = res.data
        console.log(res.data)
    })
    .catch(err => {
        console.log('Error: ', err.message);
    });
