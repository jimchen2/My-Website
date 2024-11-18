# My-Website

## ToDo

- [ ] Add YouTube Video Page
- [ ] Change title to from `?title=...` to `/type/title`
- [ ] Implement in-memory caching for Preview Page for all blogs
- [ ] Build a better search function (vector search)
- [ ] Support multi languages (basically a dropdown menu in blog with different styles for each)
- [ ] Add Online Profiles
- [ ] Write Import Code
- [ ] Update Project

## Backend

```
docker build -t my-website-backend .
docker run -p 80:80 my-website-backend
```

## Frontend

```
rclone sync build/ s3:bucket
```

- **Backend Implentation**

```
/blog?date="string"&type="string"
get
/blogpreview
get
/getbloglikes?blogdate="string"&isarray=bool
get
/comment?blogdate="string"
get/post
/visitinfo?num=[int] getting the num latest visitinfos
get/post
/changechildid
patch
/addliketoblog?blogdate="string"&isliked
patch
/addliketocomment?dateString=yourDateStringHere&isliked
/addliketocomment?commentid=yourCommentIdHere&isliked
patch
/search?query="string"
get
```
