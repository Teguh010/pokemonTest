import Vue from "vue";

Vue.filter('truncated2', function (value) {
     return value.toFixed(2)
})