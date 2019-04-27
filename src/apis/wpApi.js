import WPCOM from 'wpcom';
export const getWpPostContent = () => {
  return new Promise(resolve => {
    getWpPosts((res, err) => {
      if (err) { throw err; }
      let content = getRelevantContent(res);
      resolve(content);
      })
  })
};

const getWpPosts = (callback) => {
  const wpcom = new WPCOM();
  const blog = wpcom.site('https://thelondongourmand.wordpress.com/');

  blog.postsList({number: 3})
    .then(list => {
      // console.log(list)
      callback(list);
    })
    .catch(error => {
      // return callback(error)
      console.log(error)
    });
};

const getRelevantContent = response => {
  return response.posts.map(post => {
    return {
      URL: post.URL,
      date: post.date,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content
    }
  });
};
