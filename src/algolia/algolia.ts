// import * as functions from '../../functions/index';

const algoliasearch = require("algoliasearch")

// const ALGOLIA_ID = functions.config().algolia.id;
// const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key

const client = algoliasearch(process.env.REACT_APP_ALGOLIA_ID,
process.env.REACT_APP_ALGOLIA_SEARCH_KEY);
console.log(process.env.REACT_APP_ALGOLIA_ID)

export const searchReview = async(query) => {
  const index = client.initIndex("posts");
  return await index.search(query);
};
