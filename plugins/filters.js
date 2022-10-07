import Vue from 'vue'

import datetime from 'persian-time-ago'

Vue.filter('timeago', function (value) {
  return datetime(value)
})
