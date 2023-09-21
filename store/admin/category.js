//state
export const state = () => ({
  //categories
  categories: [],

  //page
  page: 1,

  category: {}
});

//mutations
export const mutations = {
  //mutation "SET_CATEGORIES_DATA"
  SET_CATEGORIES_DATA(state, payload) {
    //set value state "categories"
    state.categories = payload;
  },

  //mutation "SET_PAGE"
  SET_PAGE(state, payload) {
    //set value state "page"
    state.page = payload;
  },

  SET_CATEGORY_DATA(state, payload) {

    //set value state "category"
    state.category = payload
  },
};

//actions
export const actions = {
  //get categories data
  getCategoriesData({ commit, state }, payload) {
    //search
    let search = payload ? payload.pencarian : "";
    let perpage = payload ? payload.jumlahperpage : "";
    let page = payload ? payload.page : "";

    //set promise
    return new Promise((resolve, reject) => {
      //fetching Rest API "/api/admin/categories" with method "GET"
      this.$axios
        .get(
          `/api/admin/categories?pencarian=${search}&page=${
            page ?? state.page
          }&jumlahperpage=${perpage}`
        )

        //success
        .then((response) => {
          //commit ti mutation "SET_CATEGORIES_DATA"
          commit("SET_CATEGORIES_DATA", response.data.data);

          //resolve promise
          resolve();
        });
    });
  },

  //store category
  storeCategory({ dispatch, commit }, payload) {
    //set promise
    return new Promise((resolve, reject) => {
      //store to Rest API "/api/admin/categories" with method "POST"
      this.$axios
        .post("/api/admin/categories", payload)

        //success
        .then(() => {
          //dispatch action "getCategoriesData"
          dispatch("getCategoriesData");

          //resolve promise
          resolve();
        })

        //error
        .catch((error) => {
          reject(error);
        });
    });
  },

  //get detail category
  getDetailCategory({ commit }, payload) {
    //set promise
    return new Promise((resolve, reject) => {
      //get to Rest API "/api/admin/categories/:id" with method "GET"
      this.$axios
        .get(`/api/admin/categories/${payload}`)

        //success
        .then((response) => {
          console.log(response.data.data)
          //commit to mutation "SET_CATEGORY_DATA"
          commit("SET_CATEGORY_DATA", response.data.data);

          //resolve promise
          resolve();
        });
    });
  },

  //update category
  updateCategory({ dispatch, commit }, { categoryId, payload }) {
    //set promise
    return new Promise((resolve, reject) => {
      //store to Rest API "/api/admin/categories/:id" with method "POST"
      this.$axios
        .post(`/api/admin/categories/${categoryId}`, payload)

        //success
        .then(() => {
          //dispatch action "getCategoriesData"
          dispatch("getCategoriesData");

          //resolve promise
          resolve();
        })

        //error
        .catch((error) => {
          reject(error);
        });
    });
  },
};
