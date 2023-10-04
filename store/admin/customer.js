//state
export const state = () => ({

    //customers
    customers: [],

    //page
    page: 1,

})

//mutations
export const mutations = {

    //mutation "SET_CUSTOMERS_DATA"
    SET_CUSTOMERS_DATA(state, payload) {

        //set value state "customers"
        state.customers = payload
    },

    //mutation "SET_PAGE"
    SET_PAGE(state, payload) {

        //set value state "page"
        state.page = payload
    },

}

//actions
export const actions = {

    //get customers data
    getCustomersData({ commit, state }, payload) {

        //search
        let search = payload ? payload.pencarian : "";
        let perpage = payload ? payload.jumlahperpage : "";
        let page = payload ? payload.page : "";

        //set promise
        return new Promise((resolve, reject) => {

            //fetching Rest API "/api/admin/customers" with method "GET"
            this.$axios.get(`/api/admin/customers?pencarian=${search}&page=${ page ?? state.page}&jumlahperpage=${perpage}`)

            //success
            .then((response) => {

                console.log(response.data.data)
                //commit ti mutation "SET_CUSTOMERS_DATA"
                commit('SET_CUSTOMERS_DATA', response.data.data)

                //resolve promise
                resolve()
            })

        })

    },

}
