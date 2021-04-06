import service from "@/util/request";

/* 分页获取求购列表 */
export function requserdriver() {
  return service.request({
    url: "/nebula/getUserDevice",
    method: "get"
  });
}

/**
 * 求购相关
 *  */
/* 分页获取求购列表 */
export function reqbuyList(params) {
  return service.request({
    url: "/view/buying/queryRecentList",
    method: "get",
    params
  });
}

/* 发布求购信息 */
export function reqAddbuy(data) {
  return service.request({
    method: "POST",
    url: "/view/buying/member/pulishSupply",
    data
  });
}
