var noNodes = 5;
var noConn = 4;
var gravityConstant = 1.1;
var forceConstant = 1000;
var physics = true;

// list for nodes
var nodes = [];
var nodeCon = [];
var clicked = false;
var lerpValue = 0.2;
var startDisMultiplier = 0.5;
var closeNode;
var closeNodeMag;

let newNodes = [];

// function convertCSVtoNodes() {

//     for (let i = 0; i < noNodes; i++) {
//         // assign each node a random position
//         let x = random(0, 500);
//         let y = random(0, 500);
//         node = new Node(createVector(x, y), random(1, 5));
//         newNodes.push(node);
//       }
//     console.log("convertCSVtoNodes newNodes=", newNodes)
// }

// convertCSVtoNodes()


function setup() {
  createCanvas(500, 500);
  fill(0);

  // step 1: create the node list
  for (let i = 0; i < noNodes; i++) {
    // assign each node a random position
    let x = random(-startDisMultiplier * width, startDisMultiplier * width);
    let y = random(-startDisMultiplier * height, startDisMultiplier * height);
    node = new Node(createVector(x, y), random(1, 5));
    nodes.push(node);
  }

  closeNode = nodes[0];

  console.log("nodes = ", nodes)
  console.log("closeNode = ", closeNode)

  // step 2: create the list to record connection

  // create the list nodeCon, represent node connection

  // nodeCon is a list [[1,2,150],[2,5,100]]
  // push a random connection to the list

  for (let n = 0; n < noConn; n++) {   // loop through each connection
    nodeCon.push([
      round(random(noNodes - 1)),
      round(random(noNodes - 1)),
      200,
    //   random(100, 300),
    ]);
  }

  console.log("nodeCon=", nodeCon);

  // push the end point？
  nodeCon.push([0, 1, 200]);

  // lets add a connection from all solo nodes for good measure

  let connected = new Set();
  nodeCon.forEach((conn) => {
    connected.add(conn[0]);
    connected.add(conn[1]);
  });

  console.log("connected = ", connected);

  for (let n = 0; n < noNodes; n++) {
    if (!connected.has(n)) {
      nodeCon.push([n, round(random(noNodes - 1)), random(100, 300)]);
    }
  }
}

function draw() {
  translate(width / 2, height / 2);
  background(255);

  nodeCon.forEach((con) => {
    node1 = nodes[con[0]];
    node2 = nodes[con[1]];
    line(node1.pos.x, node1.pos.y, node2.pos.x, node2.pos.y);
  });

  applyForces(nodes);

  nodes.forEach((node) => {
    node.draw();

    if (physics) {
      node.update();
    }
  });

  if (clicked == true) {
    let mousePos = createVector(mouseX - width / 2, mouseY - height / 2);
    closeNode.pos.lerp(mousePos, lerpValue);
    if (lerpValue < 0.95) {
      lerpValue += 0.02;
    }
  }
}

function touchStarted() {
  clicked = true;
  let mousePos = createVector(mouseX - width / 2, mouseY - height / 2);
  nodes.forEach((node) => {
    if (
      mousePos.copy().sub(node.pos).mag() - closeNode.mass / (2 * PI) <
      mousePos.copy().sub(closeNode.pos).mag() - closeNode.mass / (2 * PI)
    )
      closeNode = node;
  });
}

function touchEnded() {
  clicked = false;
  lerpValue = 0.2;
}

function applyForces(nodes) {
  // apply force towards centre
  nodes.forEach((node) => {
    gravity = node.pos.copy().mult(-1).mult(gravityConstant);
    node.force = gravity;
  });

  // apply repulsive force between nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      pos = nodes[i].pos;
      dir = nodes[j].pos.copy().sub(pos);
      force = dir.div(dir.mag() * dir.mag());
      force.mult(forceConstant);
      nodes[i].force.add(force.copy().mult(-1));
      nodes[j].force.add(force);
    }
  }

  // apply forces applied by connections
  nodeCon.forEach((con) => {
    let node1 = nodes[con[0]];
    let node2 = nodes[con[1]];
    let maxDis = con[2];
    let dis = node1.pos.copy().sub(node2.pos);
    diff = dis.mag() - maxDis;
    node1.force.sub(dis);
    node2.force.add(dis);
  });
}

function Node(pos, size) {
  this.pos = pos;
  this.force = createVector(0, 0);
  this.mass = (2 * PI * size) / 1.5;
  this.fs = [];
}

Node.prototype.update = function () {
  force = this.force.copy();
  vel = force.copy().div(this.mass);
  // print("VEL", vel, "FORCE", force)
  this.pos.add(vel);
};

Node.prototype.draw = function () {
  ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
};
