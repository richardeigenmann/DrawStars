angular.module('drawStars', [])
        .directive("drawstars", function () {

            /**
             * This draws a star on the supplied Context2d.
             * 
             * @see http://programmingthomas.wordpress.com/2012/05/16/drawing-stars-with-html5-canvas/
             * 
             * @param {context} ctx The Canvas Context to draw on
             * @param {int} x The x coordiantes of the middle
             * @param {int} y The y coordinates of the middle
             * @param {int} outerRadius The radius of the outer points
             * @param {int} innerRadius The radius of the inner points
             * @param {int} points The number of points for the star
             * @returns {undefined}
             */
            function drawVariableSizeStar(ctx, x, y, outerRadius, innerRadius, points) {
                var halfAngle = Math.PI / points; // = 2 * PI / 2 * points
                ctx.save();
                ctx.beginPath();
                ctx.translate(x, y);
                ctx.moveTo(0, 0 - outerRadius);
                for (var i = 0; i < points; i++) {
                    ctx.rotate(halfAngle);
                    ctx.lineTo(0, 0 - innerRadius);
                    ctx.rotate(halfAngle);
                    ctx.lineTo(0, 0 - outerRadius);
                }
                ctx.fill();
                ctx.restore();
            }


            /**
             * Draws 'maxStars' stars on the supplied 2D context.
             * 
             * Starting from the left the first 'highlightStars' are drawn in the
             * 'highlightColor' with the remaining ones drawn in the 'offColor'
             * @param {context} ctx  the 2D context on which to draw
             * @param {int} points The number of points for the star
             * @param {int} maxStars total number of stars
             * @param {string } offColor the color for the offStars. Can be
             *                 a name like 'red' or a hex color like '#FF0000'
             * @param {int} highlightStars  number of stars in onColor
             * @param {string} highlightColor the color for the highlightStars. Can be
             *                 a name like 'red' or a hex color like '#FF0000'
             * @param {int} radius The radius of the outer points of the individual stars
             * @param {float} innerRadiusFraction a float between 0 and 1 to calculate the inner radius
             * @returns {undefined}
             */
            function drawStars(ctx, points, maxStars, offColor, highlightStars, highlightColor, radius, innerRadius) {
                ctx.fillStyle = offColor;
                var y = radius + 1;

                for (var i = maxStars; i > 0; i--) {
                    if (highlightStars >= i) {
                        ctx.fillStyle = highlightColor;
                    }
                    var x = ((i - 1) * 2 * radius) + radius + 1;
                    drawVariableSizeStar(ctx, x, y, radius, innerRadius, points);
                }
            }

            // the main definition of the directive
            return {
                restrict: "E",
                scope: {
                    highlightstars: '@highlightstars',
                    maxstars: '@maxstars',
                    points: '@points',
                    radius: '@radius',
                    offcolor: '@offcolor',
                    highligtcolor: '@hilightcolor',
                    innerradiusfraction: '@innerradiusfraction',
                },
                template: "<canvas></canvas>",
                link: function (scope, element) {
                    var canvas = element.find('canvas')[0];
                    var ctx = canvas.getContext('2d');

                    scope.$watch('highlightstars', function () {
                        drawThem();
                    });
                    scope.$watch('maxstars', function () {
                        drawThem();
                    });
                    scope.$watch('points', function () {
                        drawThem();
                    });
                    scope.$watch('radius', function () {
                        drawThem();
                    });
                    scope.$watch('offcolor', function () {
                        drawThem();
                    });
                    scope.$watch('highligtcolor', function () {
                        drawThem();
                    });
                    scope.$watch('innerradiusfraction', function () {
                        drawThem();
                    });

                    function drawThem() {
                        var maximumStars;
                        if (!scope.maxstars) {
                            maximumStars = 4; // default to 4 stars if nothing is defined
                        } else {
                            maximumStars = parseInt(scope.maxstars);
                        }

                        var points;
                        if (!scope.points) {
                            points = 5; // defaults to 5 points
                        } else {
                            points = parseInt(scope.points);
                        }

                        var radius;
                        if (!scope.radius) {
                            radius = 10; // defaults to a radius of 10
                        } else {
                            radius = parseInt(scope.radius);
                        }

                        var offColor;
                        if (!scope.offcolor) {
                            offColor = "gold"; // defaults to color gold
                        } else {
                            offColor = scope.offcolor;
                        }

                        var highlightColor;
                        if (!scope.highligtcolor) {
                            highlightColor = "red";  // defaults to color red
                        } else {
                            highlightColor = scope.highligtcolor;
                        }

                        var innerRadius;
                        if (!scope.innerradiusfraction) {
                            innerRadius = radius * 0.5; // defaults to 0.5 
                        } else {
                            innerRadius = radius * parseFloat(scope.innerradiusfraction);
                        }

                        // set the CANVAS width and height (not the CSS width and height)
                        // see https://egghead.io/lessons/javascript-introduction-to-html-canvas-element
                        canvas.width = maximumStars * 2 * radius + 2;
                        canvas.height = radius * 2 + 1;
                        drawStars(ctx, points, maximumStars, offColor, parseInt(scope.highlightstars), highlightColor, radius, innerRadius);
                    }
                    ;  // closes funtion drawThem
                    drawThem();
                } // link
            };
        }) // directive
        ; // angular.module


