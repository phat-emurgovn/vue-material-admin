import request from "@/plugins/axiosRequest";

const url = "/api/admin/v1/admin_users";

function fetchList(query) {
  return request({
    url: url,
    method: "get",
    params: query
  });
}

function fetchUser(id) {
  return request({
    url: url,
    method: "get",
    params: { id }
  });
}

export { fetchList, fetchUser };
