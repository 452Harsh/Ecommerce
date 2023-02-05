import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "bearer 039a2407f44032b2876ee9ce9cd087290acb61540ba4421f9e897d8d78481f90fea5d35f55f2a39c3074a73e2ec3d99573a4b07e0f39e6594028dfae53867d13aa71df52accce1b8ea05e43f9157857b2d8b29eb4518ecd38bca4719aeabafca9f86b596a6eee48a20cb2eef624ffa836f43e08549a11b2a3c8e054696fb003c",
  },
});
