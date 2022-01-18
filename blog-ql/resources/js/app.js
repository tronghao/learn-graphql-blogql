import Vue from 'vue';

import './bootstrap';
import VueRouter from 'vue-router'
import PostList from './PostList';
import TopicPostList from './TopicPostList';
import AuthorPostList from './AuthorPostList';
import Post from './Post';
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import moment from 'moment';
import NotFound from './NotFound';

window.Vue = Vue;

Vue.use(VueRouter)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.use(VueApollo)
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
  })

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

const routes = [
    { 
        path: '/',
        name: 'index',
        component: PostList 
    },
    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicPostList,
    },
    { 
        path: '/post/:id', 
        name: 'post',
        component: Post 
    },
    { 
        path: '/authors/:id', 
        name: 'author',
        component: AuthorPostList 
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
  ];

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })



Vue.filter("timeago", value => moment(value).fromNow() );
Vue.filter("longDate", value => moment(value).format("MMMM Do YYYY") );

const app = new Vue({
    el: '#app',
    router,
    apolloProvider
});
