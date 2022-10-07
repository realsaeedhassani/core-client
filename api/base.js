import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { getBaseUrl } from '../utils/env'

Vue.use(VueAxios, axios)

const base = axios.create({
  baseURL: getBaseUrl().ip,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default base
