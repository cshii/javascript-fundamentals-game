var Engine = Matter.Engine,
    Events = Matter.Events,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Constraint = Matter.Constraint,
    Detector = Matter.Detector,
    Runner = Matter.Runner;

var acceleration = 5;

var engine = Engine.create(),
    world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    render: { fillStyle: 'red' },
    options: {
        width: 1000,
        height: 600,
        wireframes: false
    }
});

Render.run(render);

var runner = Runner.create();
Runner.run(runner, engine);

//keyboard keys
var leftArrow = 'arrowleft'
var rightArrow = 'arrowright'

var ground = Bodies.rectangle(
    render.options.width / 2,
    render.options.height,
    1000,
    50,
    {
        isStatic: true,
        render: { fillStyle: 'yellow' }
    }
);

var box = Bodies.rectangle(
    200,
    render.options.height - 50,
    100,
    30,
    {
        render: {fillStyle: 'red'}
    }
)

World.add(engine.world, [ground, box]);

document.body.onkeydown = function(e) {
    var keyPressed = e.key.toLowerCase();
}