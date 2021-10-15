import request from "@/api/request"; // 引入封装好的axios

// searchSuggest
export function searchSuggestApi(params) {
  return request({
    url: "search/suggest",
    method: "get",
    params: params
  });
}
