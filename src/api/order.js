import request from "@/plugins/axiosRequest";

export function fetchList(query) {
  return request({
    url: "/api/admin/v1/orders",
    method: "get",
    params: query
  });
}

export function fetchOrder(id) {
  return request({
    url: "/api/admin/v1/orders",
    method: "get",
    params: { id }
  });
}
