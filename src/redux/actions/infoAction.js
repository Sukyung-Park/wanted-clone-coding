import api from "../api";

function getInfo() {
  return async (dispatch) => {
    const logoinAPi = await api.post(`/app/users/sign-in`);
  };
}

export const infoAction = {
  getInfo,
};
