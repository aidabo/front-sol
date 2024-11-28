import axios from "axios";
import { generateToken } from "./token";
import { environment } from "@/common/environment";

const useGhostAdminApi = () => {
  
  // Admin API key goes here
  const key = environment().env.ghost_api_admin_key;

  const post = async (posts) => {
    const token = generateToken(key);
    console.log("token", token);

    // Make an authenticated request to create a post
    const url = environment().env.ghost_site_url + "ghost/api/admin/posts/";
    const headers = {
      Authorization: `Ghost ${token}`,
      "Accept-Version": "v5.0",
    };
    const payload = { posts: posts };
    await axios
      .post(url, payload, { headers })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return { post };
};

export { useGhostAdminApi };
