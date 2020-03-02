const BASE_URL = "/api/";

function index() {
  return fetch(BASE_URL + 'hairprofessionals').then(res => res.json());
}

function create(restaurant){
  return fetch(BASE_URL + "create-hairprofessional", {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(restaurant)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Hair Professional Already Exists");
      }
    })
}

function createReview(review, idx){
  return fetch(BASE_URL + `hairprofessionals/${idx}/review`, {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(review)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Hair Professional Already Exists");
      }
    })
}

function deleteReview(restaurant, idx){
  return fetch(BASE_URL + `hairprofessionals/${idx}`, {
    method: "POST",
    headers: new Headers({ "Content-type": "Application/json" }),
    body: JSON.stringify(restaurant)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Hair Professional Already Exists");
      }
    })
}

export default {
  index,
  create,
  createReview,
  deleteReview
}