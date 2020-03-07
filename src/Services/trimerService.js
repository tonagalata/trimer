import tokenService from "./tokenService";

const BASE_URL = "/api/";

function index() {
  return fetch(BASE_URL + 'salon', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
}

function getFeatured() {
  return fetch(BASE_URL + 'featured').then(res => res.json());
}

function getStylist(idx) {
  return fetch(BASE_URL + `salon/${idx}/stylist`).then(res => res.json());
}

function create(salon){
  return fetch(BASE_URL + "create-salon", {
    method: "POST",
    headers: { 
      'Authorization': 'Bearer ' + tokenService.getToken(),
      "Content-type": "Application/json", 
    },
    body: JSON.stringify(salon)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Salon Already Exists");
      }
    })
}

function createReview(review, idx){
  return fetch(BASE_URL + `salon/${idx}/review`, {
    method: "POST",
    headers: { 
      "Content-type": "Application/json", 
      "Authorization": 'Bearer ' + tokenService.getToken(),
    },
    body: JSON.stringify(review)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Review Already Exists");
      }
    })
}

function deleteReview(review, siteIdx){
  return fetch(BASE_URL + `salon/${siteIdx}/review/${review}/`, {
    method: "DELETE"
    // ,
    // headers: new Headers({ "Content-type": "Application/json" }),
    // "Authorization": 'Bearer ' + tokenService.getToken(),
    // body: JSON.stringify(review)
  })
  .then(res => {return  res.json() })
}

export default {
  index,
  create,
  createReview,
  deleteReview,
  getFeatured,
  getStylist
}