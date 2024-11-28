// The admin API client is the easiest way to use the API
import GhostAdminAPI from "@tryghost/admin-api";
import { generateToken } from "./token"

const useAdminApi = ({siteUrl, adminApiKey}) => { 

  const url = siteUrl;
  const key = adminApiKey;
  
  // Configure the client
  const api = GhostAdminAPI({
    url: url,
    key: key,
    version: "v5.0",

    //use lib's token function error: Right-hand side of 'instanceof' is not an object, replace with custom
    generateToken: generateToken, 

    //must set userAgent as boolean or string of user agent
    userAgent: true //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" 
  });

  console.log("api", api);

  // Make an authenticated request
  const post = async (post) => {
    api.posts
      .add(post)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.log(error));
  };

  return { post };
}

export { useAdminApi }
