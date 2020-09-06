import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, payload) {
            state.stocks = payload;
        },
        randomizeStocks(state) {
            state.stocks.forEach(element => {
                element.price = Math.round(element.price * (1 + Math.random() - 0.45));
            });
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit('buyStock', order);
        },
        initStocks({ commit }) {
            commit('setStocks', stocks);
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks');
        }
    },
    getters: {
        stocks(state) {
            return state.stocks;
        }
    }
}