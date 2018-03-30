function getFirstSelector(selector) {
  var elements = document.querySelector(selector);
  return elements;
}

function nestedTarget() {

  return document.querySelector('#nested .target');

}


function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
