var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(-12, 5, -12);
camera.rotation.set(-1, 0, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var flat = new THREE.Group();
for(var i = 0; i < 24; i++) {
	for(var j = 9; j < 24; j++) {
		var land = new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0x3c913d}));
		land.position.set(-1*i, 0, -1*j);
		flat.add(land);
	}
}
scene.add(flat);

var animate = function () {
	requestAnimationFrame( animate );

	

	renderer.render( scene, camera );
};

animate();
