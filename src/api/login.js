import request from "@/plugins/axiosRequest";

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  };
  return request({
    url: "/admin_auth/sign_in",
    method: "post",
    data
  });
}
