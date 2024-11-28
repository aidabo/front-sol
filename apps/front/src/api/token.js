import { sign } from "jsonwebtoken";
import { Buffer } from "buffer";

/**
 *
 * @param {String} key - API key to sign JWT with
 * @param {String} audience - token audience
 * @returns
 */
export const generateToken = (key, audience) => {
  const [id, secret] = key.split(":");

  // Create the token (including decoding secret)
  const token = sign({}, Buffer.from(secret, "hex"), {
    keyid: id,
    algorithm: "HS256",
    expiresIn: "5m",
    audience: audience || `/admin/`,
  });

  return token;
}
