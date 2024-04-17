# My-Website

1. Point dns to server
2. Run `setup.sh` on Linode instances

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
