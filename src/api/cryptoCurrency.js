import request from "@/plugins/axiosRequest";

const url = "/api/admin/v1/crypto_currencies";

export function fetchList(query) {
  return request({
    url: url,
    method: "get",
    params: query
  });
}

export function fetchItem(id) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

export function updateItem(data) {
  console.log(data.id);
  return request({
    url: `${url}/${data.id}`,
    method: "put",
    data: data
  });
}