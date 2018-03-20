
'use strict';

/* はじめに https://jp.vuejs.org/v2/guide/#%E5%AE%A3%E8%A8%80%E7%9A%84%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0 */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data:{ message: 'You loaded this page on ' + new Date()}
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen : true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'Learn Javascript'},
      {text: 'Learn Vue'},
      {text: 'Build something awesome'}
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message : 'Hello vue.js!'
  },
  methods: {
    reverseMessage: function (){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message : 'Hello , Vue!'
  }
})

/* コンポーネントによる構成 https://jp.vuejs.org/v2/guide/#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E6%A7%8B%E6%88%90 */
