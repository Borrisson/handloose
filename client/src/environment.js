import axios from "axios";
// localization could also be put in here.

export function urlTarget() {
  switch (process.env["NODE_ENV"]) {
    case "staging":
    case "production":
    case "development":
    default:
    return "http://localhost:3000";
  }
}

export default function setUpEnv() {
  axios.defaults.baseURL = urlTarget();
};