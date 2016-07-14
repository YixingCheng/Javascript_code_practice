function Node(val, left, right) {
	var left = left || null;
	var right = right || null;
	var val = val;
	return {
		left: left,
		right: right,
		val: val
	};
}

var right1 = new Node('right1');
var right2 = new Node('right2');

var left1 = new Node('left1');
var left2 = new Node('left2');

var left = new Node('left', left1, left2);
var right = new Node('right', right1, right2);

var root = new Node('root', left, right);

function traverseDFS(root) {
	if (!root){
		return;
	}
	console.log(root.val);
	if (root.left){
		traverseDFS(root.left);
	}
	if (root.right){
		traverseDFS(root.right);
	}
}

function traverseBFS(layer) {
	var nextLayer = [];
	if (!layer || layer.length == 0){
		return;
	}
	for(var i in layer){
		console.log(layer[i].val);

		if(layer[i].left){
			nextLayer.push(layer[i].left);
		}
		if(layer[i].right){
			nextLayer.push(layer[i].right);
		}
	}

	traverseBFS(nextLayer);
}

function traverseStack(root) {
	var stack = [];
	var current = root;
	var pop = false;
	stack.push({node: root, visited: false});

	while (stack.length){
		current = stack[stack.length - 1];

		if(!current.node) {
			stack.pop();
			continue;
		}

		if(current.visited) {
			var node = stack.pop();
			console.log(node.node.val);
			continue;
		}

		current.visited = true;
		stack.push({node: current.node.right, visited: false});
		stack.push({node: current.node.left, visited: false});
	}

}

traverseDFS(root);
traverseBFS([root]);
traverseStack(root);