<template>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus animi autem commodi cum deleniti deserunt
        explicabo, harum, illo obcaecati odio officia omnis placeat quia quod reprehenderit sunt ut vitae.

        dsfhsdkjfn

        <ul id="example-1">
            <li v-for="post in posts">
                <h4>{{ post.title_sk }}</h4>
                <p>{{post.content_sk}}</p>
            </li>
        </ul>

    </div>
</template>

<script>

  import PostsStore from '../../stores/PostsStore'

  export default {

    created () {
      PostsStore.methods.fetchPosts()
    },
    name: 'Posts',
    data () {
      return {
        posts: PostsStore.data.posts
      }
    }

  }
</script>

<style scoped>

</style>
