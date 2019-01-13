import request from "@/plugins/axiosRequest";

function fetchList(query) {
  return request({
    url: "/api/admin/v1/users",
    method: "get",
    params: query
  });
}

function fetchUser(id) {
  return request({
    url: "/api/admin/v1/users",
    method: "get",
    params: { id }
  });
}

export { fetchList, fetchUser };
