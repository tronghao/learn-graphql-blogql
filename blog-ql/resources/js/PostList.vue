<template>
    <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mt-20 mb-20">
        <div class="text-4xl">All Posts</div>
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <PostListItem v-for="post in posts" :key="post.id" :post="post" class="mt-10"></PostListItem>
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
        posts: gql`{
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
        }`,
    },
}
</script>
