DrawStars
=========

An AngularJS directive to draw stars on a webpage
http://richardeigenmann.github.io/DrawStars/presentation.html

## Example
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

[See thre result live](http://richardeigenmann.github.io/DrawStars/drawStarsApp.html)

Link to drawStars.js: [http://richardeigenmann.github.io/DrawStars/drawStars.js](http://richardeigenmann.github.io/DrawStars/drawStars.js)



<!-- 
Reminder for self how to build the presentation:
npm install grunt -g
grunt
copy files from public_html/build to branch gh-pages
-->

