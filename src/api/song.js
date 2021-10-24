import request from "@/api/request"; // 引入封装好的axios

// songDetail
export function songDetailApi(params) {
  return request({
    url: "song/detail",
    method: "get",
    params,
  });
}

export function songLyricApi(params) {
  return request({
    url: "lyric",
    method: "get",
    params,
  });
}
