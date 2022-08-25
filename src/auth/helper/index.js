import { API } from "../../backend";

export const signup = (user) => {
  return fetch(`${API}user/prl/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  return fetch(`${API}user/prl/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data.token));
    localStorage.setItem("_id", JSON.stringify(data.user.childId));
    localStorage.setItem("group", JSON.stringify(data.user.groupd));
    next();
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/signout`, {
      method: "GET",
    })
      .then((response) => console.log("signout success"))
      .catch((err) => console.log(err));
  }
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return "";
  }
  if (localStorage.getItem("jwt")) {
    console.log(JSON.parse(localStorage.getItem("jwt")));

    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return "";
  }
};

export const DetermineGroup = () => {
  if (typeof window == "undefined") {
    return "";
  }
  if (localStorage.getItem("group")) {
    return JSON.parse(localStorage.getItem("group"));
  } else {
    return "";
  }
};
