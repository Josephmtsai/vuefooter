import * as types from './mutations_type';

const changeSelectedDays = ({ commit }, data) => {
  commit(types.SELECTEDLANGUAGE, data);
};

export {changeSelectedDays as default}
