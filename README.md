DrawStars
=========

An AngularJS directive to draw stars on a webpage
http://richardeigenmann.github.io/DrawStars/presentation.html

## Example
```html
<!DOCTYPE html>
<html ng-app="drawStarsApp">
<body>
    <drawstars highlightstars="3" maxstars="4"></drawstars>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0-beta.3/angular.min.js">
    </script>
    <script src="drawStars.js"></script>
    <script>
        angular.module('drawStarsApp', ['drawStars']);
    </script>
</body>
</html>
```

[See thre result live](http://richardeigenmann.github.io/DrawStars/drawStarsApp.html)

Link to drawStars.js: [http://richardeigenmann.github.io/DrawStars/drawStars.js](http://richardeigenmann.github.io/DrawStars/drawStars.js)

##Options
####maxstars
The number of stars to show. An integer between 1 and any reasonable number. Defaults to 4.

####offcolor
A string for the color for the non-highlighted stars. Any color the HTML5 context.fillSytle 
will understand will work. Examples: "red", "gold", "%FF0000". Defaults to "gold".

####highlightstars
The number of stars that are highlighted. An integer between 1 and maxstars. (Though it doesn't 
matter if it is higher than maxstars.) Defaults to 0.

####highligtcolor
A string representing the color for the highlighted stars. See offcolor for syntax. Defaults to "red".

####points
An integer between 4 and a reasonable number, say 30. This parameter defines how many points
and troughs the stars will have. Defaults to 5.

####radius
An integer that measures the radius of the star from the centre to the outer points in pixels.
Defaults to 10.

####innerradiusfraction
The multiplier to determine the inner radius from the radius. Defaults to 0.5.



<!-- 
Reminder for self how to build the presentation:
npm install grunt -g
grunt
copy files from public_html/build to branch gh-pages
-->

