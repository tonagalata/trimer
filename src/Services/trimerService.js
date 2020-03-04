const BASE_URL = "/api/";

function index() {
  return fetch(BASE_URL + 'salon').then(res => res.json());
}

function getFeatured() {
  return fetch(BASE_URL + 'featured').then(res => res.json());
}

function create(restaurant){
  return fetch(BASE_URL + "create-salon", {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(restaurant)
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
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(review)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Salon Already Exists");
      }
    })
}

function deleteReview(restaurant, idx){
  return fetch(BASE_URL + `salon/${idx}`, {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(restaurant)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Salon Already Exists");
      }
    })
}

export default {
  index,
  create,
  createReview,
  deleteReview,
  getFeatured
}