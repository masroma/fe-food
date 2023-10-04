//state
export const state = () => ({

  settingapp: {},

  page: 1,


});

export const mutations = {

  //mutation "SET_PAGE"
  SET_PAGE(state, payload) {
    //set value state "page"
    state.page = payload;
  },

  SET_SETTINGAPP_DATA(state, payload) {

    //set value state "category"
    state.settingapp = payload
  },
};

export const actions = {
  getDetailSettingapp({ commit }, payload) {
    //set promise
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`/api/admin/settingapp`)

        //success
        .then((response) => {
          //commit to mutation "SET_CATEGORY_DATA"
          commit("SET_SETTINGAPP_DATA", response.data.data);

          //resolve promise
          resolve();
        });
    });
  },

  //update category
  updateSettingapp({ dispatch, commit }, { settingappId, payload }) {
    //set promise
    return new Promise((resolve, reject) => {
      //store to Rest API "/api/admin/categories/:id" with method "POST"
      this.$axios
        .post(`/api/admin/settingapp/update/${settingappId}`, payload)

        //success
        .then(() => {
          //dispatch action "getCategoriesData"
          dispatch("getDetailSettingapp");

          //resolve promise
          resolve();
        })

        //error
        .catch((error) => {
          reject(error);
        });
    });
  },
}
