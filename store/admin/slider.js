//state
export const state = () => ({
  //sliders
  sliders: [],

  //page
  page: 1,

  slider: {}
});

//mutations
export const mutations = {
  //mutation "SET_sliders_DATA"
  SET_SLIDERS_DATA(state, payload) {
    //set value state "sliders"
    state.sliders = payload;
  },

  SET_SLIDERS_ALL(state, payload) {
    //set value state "sliders"
    state.sliderall = payload;
  },

  //mutation "SET_PAGE"
  SET_PAGE(state, payload) {
    //set value state "page"
    state.page = payload;
  },

  SET_SLIDER_DATA(state, payload) {

    //set value state "slider"
    state.slider = payload
  },
};

//actions
export const actions = {
  //get sliders data
  getSlidersData({ commit, state }, payload) {
    //search
    let search = payload ? payload.pencarian : "";
    let perpage = payload ? payload.jumlahperpage : "";
    let page = payload ? payload.page : "";

    //set promise
    return new Promise((resolve, reject) => {
      //fetching Rest API "/api/admin/sliders" with method "GET"
      this.$axios
        .get(
          `/api/admin/sliders?pencarian=${search}&page=${
            page ?? state.page
          }&jumlahperpage=${perpage}`
        )

        //success
        .then((response) => {
          //commit ti mutation "SET_sliders_DATA"
          commit("SET_SLIDERS_DATA", response.data.data);

          //resolve promise
          resolve();
        });
    });
  },

  //store slider
  storeSlider({ dispatch, commit }, payload) {
    //set promise
    return new Promise((resolve, reject) => {
      //store to Rest API "/api/admin/sliders" with method "POST"
      this.$axios
        .post("/api/admin/sliders", payload)

        //success
        .then(() => {
          //dispatch action "getslidersData"
          dispatch("getSlidersData");

          //resolve promise
          resolve();
        })

        //error
        .catch((error) => {
          reject(error);
        });
    });
  },

  //get detail slider
  getDetailSlider({ commit }, payload) {
    //set promise
    return new Promise((resolve, reject) => {
      //get to Rest API "/api/admin/sliders/:id" with method "GET"
      this.$axios
        .get(`/api/admin/sliders/${payload}`)

        //success
        .then((response) => {
          console.log(response.data.data)
          //commit to mutation "SET_slider_DATA"
          commit("SET_SLIDER_DATA", response.data.data);

          //resolve promise
          resolve();
        });
    });
  },

  //update slider
  updateSlider({ dispatch, commit }, { sliderId, payload }) {
    //set promise
    return new Promise((resolve, reject) => {
      //store to Rest API "/api/admin/sliders/:id" with method "POST"
      this.$axios
        .post(`/api/admin/sliders/${sliderId}`, payload)

        //success
        .then(() => {
          //dispatch action "getslidersData"
          dispatch("getSlidersData");

          //resolve promise
          resolve();
        })

        //error
        .catch((error) => {
          reject(error);
        });
    });
  },

  destroy({ dispatch, commit }, payload) {

    //set promise
    return new Promise((resolve, reject) => {

        //delete to Rest API "/api/admin/sliders/:id" with method "DELETE"
        this.$axios.delete(`/api/admin/sliders/${payload}`)

        //success
        .then(() => {

            //dispatch action "getslidersData"
            dispatch('getSlidersData')

            //resolve promise
            resolve()

        })

    })

  },

  //get list all sliders
  getListAllsliders({ commit, state }, payload) {

      //set promise
      return new Promise((resolve, reject) => {

          //fetching Rest API "/api/web/sliders" with method "GET"
          this.$axios.get('/api/web/sliders')

          //success
          .then((response) => {


              //commit ti mutation "SET_sliders_DATA"
              commit('SET_SLIDERS_ALL', response.data.data)

              //resolve promise
              resolve()
          })

      })

  },
};
