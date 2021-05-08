import request from "@/utils/request";

export const listCustomers = params => {
  return request({
    url: "/customer/list",
    method: "get",
    params
  });
};

export const bookRoom = params => {
  return request({
    url: "/customer/book-room",
    method: "post",
    params
  });
};
