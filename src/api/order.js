import request from "@/plugins/axiosRequest";

const url = "/api/admin/v1/orders";

export function fetchList(query) {
  return request({
    url: url,
    method: "get",
    params: query
  });
}

export function fetchOrder(id) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}