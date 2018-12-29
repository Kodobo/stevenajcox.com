const getAllPosts = callback => {
  const xhr = new XMLHttpRequest();
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOGID}/posts?key=${BLOGGER_API_KEY}`;
  xhr.open("GET", url);
  xhr.onload = () => {
    callback(null, xhr.responseText);
  };
  xhr.onerror = () => {
    callback(xhr.response);
  };
  xhr.send();
};

export const getPosts = () => {
  return new Promise(resolve => {
    getAllPosts((err, res) => {
    if(err) {throw err;}
    const parsedRes = JSON.parse(res);
    resolve(parsedRes.items.map(item => item.content));
    })
  })
};

const BLOGGER_API_KEY = `AIzaSyBY4bq1c9xARexXZZMUagkVMkC2kNCroqc`;
const BLOGID = '8679268700939935855';