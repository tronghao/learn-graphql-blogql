<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mt-20 mb-20">
        <div class="text-4xl">
            <router-link :to="{ name: 'index' }" class="text-gray-600 hover:underline">All Posts</router-link> 
            <span class="text-gray-600">/</span>
            <span>{{ user.name }}</span>
        </div>
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <PostListItem v-for="post in user.posts" :key="post.id" :post="post" class="mt-10"></PostListItem>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import PostListItem from './components/PostListItem.vue'
export default {
    components: {
        PostListItem
    },
    apollo: {
        // Simple query that will update the 'hello' vue property
        user: {
            query: gql`
                query ($id: ID!) {
                    user (id: $id) {
                        id
                        name
                        posts {
                            id
                            title
                            lead
                            created_at
                            author {
                                id
                                name
                            }
                            topic {
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables() {
                return {
                    id: this.$route.params.id
                };
            }
        }
    },
}
</script>
