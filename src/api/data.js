import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const endpoints = {
  register: '/users/register',
  login: '/users/login',
  logout: '/users/logout',
  catalog: '/data/wines?sortBy=_createdOn%20desc&distinct=name',
  create: '/data/wines',
  details: (id) => `/data/wines/${id}`,
  delete: (id) => `/data/wines/${id}`,
  search: (query) => `/data/wines?where=name%20LIKE%20%22${query}%22`
};


export async function getList() {
  return await api.get(host + endpoints.catalog);
}

export async function createWine() {
  return await api.post(host + endpoints.create);
}

export async function getSingleWine(id) {
  return await api.get(host + `/data/wines/${id}`);
}

export async function deleteWine(id) {
  return await api.del(host + `/data/wines/${id}`);
}

export async function editWine(id) {
  return await api.put(host + `/data/wines/${id}`);
}

export async function search(query) {
  return await api.post(host + `/data/wines?where=name%20LIKE%20%22${query}%22`);
}

