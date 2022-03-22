const { httpGet } = require('./mock-http-interface');

async function fetch(url){
  try {
    const response = await httpGet(url);
    return {[response.status === 200 ? 'Arnie Quote' : 'FAILURE'] : JSON.parse(response.body).message}
  } catch (error) {
    return console.log('err', error.message)
  }
}

const getArnieQuotes = async (urls) => {
    const results = await Promise.all(urls.map((url)=>fetch(url)));
    return results;
  };

module.exports = {
  getArnieQuotes,
};
