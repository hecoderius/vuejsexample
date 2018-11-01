import axios from 'axios'

const PostsStore = {
  data: {
    posts: []
  },
  methods: {
    fetchPosts () {
      console.log('fetch post ide')
      axios.get('http://fribackend.test/api/posts')
        .then((response) => {

          PostsStore.data.posts = response.data.data;

          console.log(PostsStore.data.posts);

        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}

export default PostsStore
