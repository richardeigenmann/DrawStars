angular.module('drawStars', [])
        .directive("drawstars", function () {

            function drawVariableSizeStar(ctx, x, y, outerRadius, points, innerRadiusFraction) {
                var halfAngle = Math.PI / points; // = 2 * PI / 2 * points
                var innerRadius = outerRadius * innerRadiusFraction;
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
             * Originally found this page: http://programmingthomas.wordpress.com/2012/05/16/drawing-stars-with-html5-canvas/
             * This draws a star using parametrised radius and spike length. I fear that doing all those floating point 
             * calculations could be really slow so I have "pre-rendered" the calculations into this function for a small star.
             * @param {type} ctx
             * @param {type} x
             * @param {type} y
             * @returns {undefined}
             */
            function draw10pxStar(ctx, x, y) {
                ctx.save();
                ctx.beginPath();
                ctx.translate(x, y);
                ctx.moveTo(0, -10);
                for (var i = 0; i < 5; i++) {
                    ctx.rotate(0.6283185307179586);
                    ctx.lineTo(0, -4.5);
                    ctx.rotate(0.6283185307179586);
                    ctx.lineTo(0, -10);
                }
                ctx.fill();
                ctx.restore();
            }

            /**
             * Draws 'maxStars' stars on the supplied 2D context.
             * Starting from the left the first 'stars' are drawn in the
             * 'onColor' with the remaining ones drawn in the 'offColor'
             * @param {type} onStars  number of stars in onColor
             * @param {type} maxStars total number of stars
             * @param {type} onColor the color for the onStars
             * @param {type} offColor the color for the offStars
             * @param {type} ctx  the 2D context on which to draw
             * @returns {undefined}
             */
            function drawStars(ctx, onStars, maxStars, onColor, offColor, points, radius) {
                ctx.fillStyle = offColor;

                for (var i = maxStars; i > 0; i--) {
                    if (onStars >= i) {
                        ctx.fillStyle = onColor;
                    }
                    if (points == 5 && radius == 10) {
                        draw10pxStar(ctx, (i - 1) * 20 + 11, 11);
                    } else {
                        drawVariableSizeStar(ctx, ((i - 1) * 2 * radius) + radius + 1, radius + 1, radius, points, 0.5);
                    }
                }
            }

            return {
                restrict: "E",
                scope: {
                    onstars: '@stars',
                    maxstars: '@maxstars',
                    points: '@points',
                    radius: '@radius',
                    offcolor: '@offcolor',
                    oncolor: '@oncolor',
                },
                template: "<canvas height='21'></canvas>",
                link: function (scope, element) {
                    var canvas = element.find('canvas')[0];
                    var ctx = canvas.getContext('2d');

                    scope.$watch('onstars', function () {
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
                    scope.$watch('onolor', function () {
                        drawThem();
                    });


                    function drawThem() {
                        // default to 4 stars if nothing is defined
                        var maximumStars;
                        if (!scope.maxstars) {
                            maximumStars = 4;
                        } else {
                            maximumStars = parseInt(scope.maxstars);
                        }

                        var points;
                        if (!scope.points) {
                            points = 5;
                        } else {
                            points = parseInt(scope.points);
                        }

                        var radius;
                        if (!scope.radius) {
                            radius = 10;
                        } else {
                            radius = parseInt(scope.radius);
                        }

                        var offColor;
                        if (! scope.offcolor) {
                            offColor = "gold";
                        } else {
                            offColor = scope.offcolor;
                        }

                        var onColor;
                        if (!scope.oncolor) {
                            onColor = "red";
                        } else {
                            onColor = scope.oncolor;
                        }


                        canvas.width = maximumStars * 2 * radius + 2;
                        canvas.height = radius * 2 + 1;
                        drawStars(ctx, parseInt(scope.onstars), maximumStars, onColor, offColor, points, radius);
                    }
                    ;

                    drawThem();
                }
            };
        })
        ;


