import * as api from "./api.js";

const host = "http://localhost:3030";
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const pageSize = 3;
const endpoints = {
  register: "/users/register",
  login: "/users/login",
  logout: "/users/logout",
  catalog: "/data/wines?sortBy=_createdOn%20desc&distinct=name",
  create: "/data/wines",
  details: (id) => `/data/wines/${id}`,
  delete: (id) => `/data/wines/${id}`,
  search: (query) => `/data/wines?where=name%20LIKE%20%22${query}%22`,
  wines: `/data/wines?pageSize=${pageSize}&offset=`,
  size: "/data/wines?count",
  mywines: (userId) =>
    `/data/wines?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  like: "/data/likes",
  allLikes: (wineId) =>
    `/data/likes?where=wineId%3D%22${wineId}%22&distinct=_ownerId&count`,
  myLikes: (wineId, userId) =>
    `/data/likes?where=wineId%3D%22${wineId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

// to get all items with pages
export async function getAllWines(page) {
  let dataUrl = endpoints.wines + (page - 1) * pageSize;
  let sizeUrl = endpoints.size;
  const [data, size] = await Promise.all([
    api.get(host + dataUrl),
    api.get(host + sizeUrl),
  ]);
  return {
    data,
    pages: Math.ceil(size / pageSize),
  };
}

// to get all items without pages
export async function getList() {
  return await api.get(host + endpoints.catalog);
}

export async function createWine(data) {
  return await api.post(host + endpoints.create, data);
}

export async function getSingleWine(id) {
  return await api.get(host + endpoints.details(id));
}

export async function deleteWine(id) {
  return await api.del(host + endpoints.delete(id));
}

export async function editWine(id, data) {
  return await api.put(host + endpoints.details(id), data);
}

export async function search(query) {
  return await api.get(host + endpoints.search(query));
}

export async function myWines(userId) {
  return await api.get(host + endpoints.mywines(userId));
}

export async function like(wineId) {
  return await api.post(host + endpoints.like, wineId);
}

export async function getTotalLikes(wineId) {
  return await api.get(host + endpoints.allLikes(wineId));
}

export async function getUserLike(wineId, userId) {
  return await api.get(host + endpoints.myLikes(wineId, userId));
}
