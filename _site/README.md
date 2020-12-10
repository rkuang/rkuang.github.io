# rkuang.github.io

# Deploying using gh-pages branch
https://clontz.org/blog/2014/05/08/git-subtree-push-for-deployment/

```git subtree push --prefix build_folder origin gh-pages```

```git push origin `git subtree split --prefix build_folder master`:gh-pages --force```
