import taroRequest from "../../utils/request";

export function getGameListAction(data) {
  return taroRequest({
    url: '/',
    method: 'GET',
    data,
  })
}