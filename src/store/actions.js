import * as types from './mutations_type';

export const changeSelectedLanguage = ({ commit }, data) => {
  commit(types.SELECTEDLANGUAGE, data);
};
