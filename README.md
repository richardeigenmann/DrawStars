DrawStars
=========

An AngularJS directive to draw stars on a webpage
http://richardeigenmann.github.io/DrawStars/presentation.html

```html
<!DOCTYPE html>
<html ng-app="drawStarsApp">
<body>
    <drawstars highlightstars="3" maxstars="4">&lt;/drawstars>
    <script src="//ajax.googleapis.com/.../angular.min.js">&lt;/script>
    <script src="drawStars.js">&lt;/script>
    <script>
        angular.module('drawStarsApp', ['drawStars']);
    </script>
</body>
</html>
```


Reminder for self how to build the presentation:

npm install grunt -g

grunt

copy files from public_html/build to branch gh-pages

