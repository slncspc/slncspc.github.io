var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(-12, 3, -14);
camera.rotation.set(0, 0, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var flat = new THREE.Group();
for(var i = 0; i < 24; i++) {
	for(var j = 0; j < 24; j++) {
		var land = new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0x3c913d}));
		land.position.set(-1*i, 0, -1*j);
		flat.add(land);
	}
}
scene.add(flat);

var duck = new THREE.Group();
for(var i = 0; i < 10; i++) {
	switch(i) {
		case 0:
			var hor = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			hor.position.set(-14, 1, -21);
			duck.add(hor);
			break;
		case 1:
			var hor = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			hor.position.set(-13, 1, -21);
			duck.add(hor);
			break;
		case 2:
			var hor = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			hor.position.set(-12, 1, -21);
			duck.add(hor);
			break;
		case 3:
			var hor = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			hor.position.set(-11, 1, -21);
			duck.add(hor);
			break;
		case 4:
			var hor = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			hor.position.set(-10, 1, -21);
			duck.add(hor);
			break;
		case 5:
			var ver = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			ver.position.set(-12, 2, -21);
			duck.add(ver);
			break;
		case 6:
			var ver = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			ver.position.set(-12, 3, -21);
			duck.add(ver);
			break;
		case 7:
			var ver = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xeba9e6}));
			ver.position.set(-12, 4, -21);
			duck.add(ver);
			break;
		case 8:
			var ver = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color : 0xff0000}));
			ver.position.set(-12, 5, -21);
			duck.add(ver);
			break;
	}
}

scene.add(duck);

var animate = function () {
	requestAnimationFrame( animate );

	

	renderer.render( scene, camera );
};

animate();
