import { getGameListAction } from "./service";

export default {
  namespace: 'index',
  state: {
    gameList: [],
    page: 1,
  },

  effects: {
    * getGameList({ payload }, { call, put, select }) {
      const tempList = yield select(state => state.index.gameList);
      const res = yield call(getGameListAction, payload);
      yield put({
        type: 'updateState',
        payload: {
          gameList: tempList.concat(res || []),
          page: payload.page,
        }
      })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
}