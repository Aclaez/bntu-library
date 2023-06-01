import axios from "axios";

const PAGE_SIZE = 25;

const basePath = "https://api.openalex.org";

export const api = {
  getWorks: (queryString, page = 1) =>
    axios(
      `${basePath}/works?page=${page}&per-page=${+PAGE_SIZE}&filter=${queryString}`
    ).then((res) => res.data),
  getAuthors: (queryString, page = 1) =>
    axios(
      `${basePath}/authors?page=${page}&per-page=${+PAGE_SIZE}&filter=${queryString}`
    ).then((res) => res.data),
  getInstitutions: (queryString, page = 1) =>
    axios(
      `${basePath}/institutions?page=${page}&per-page=${+PAGE_SIZE}&filter=${queryString}`
    ).then((res) => res.data),
  getSources: (queryString, page = 1) =>
    axios(
      `${basePath}/sources?page=${page}&per-page=${+PAGE_SIZE}&filter=${queryString}`
    ).then((res) => res.data),
  getConcepts: (queryString, page = 1) =>
    axios(
      `${basePath}/concepts?page=${page}&per-page=${+PAGE_SIZE}&filter=${queryString}`
    ).then((res) => res.data),
};
