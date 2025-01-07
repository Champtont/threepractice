import './App.css';
import * as THREE from 'three'
import WebGL from 'three/addons/capabilities/WebGL.js';
import { TextGeometry} from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

function App() {
//threejs text

const loader = new FontLoader();

loader.load( '/deep data_Regular.json', function ( font) {

	const geometry = new TextGeometry( 'Hello three.js!', {
		font: font,
		size: 100,
		depth: 5,
		curveSegments: 15,
		bevelEnabled: true,
		bevelThickness: 5,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 5
	} );
  const textMesh = new THREE.MeshStandardMaterial({color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide
  })

  const wireTextMesh = new THREE.MeshBasicMaterial({
    color: 0x9c191b,
    wireframe: true
  })

  const text = new THREE.Mesh(geometry, textMesh, wireTextMesh)
  text.add(wireTextMesh)

  text.position.z = - 500;
  text.position.y = 250;
  text.position.x = - 350;
  scene.add(text)
} );

  //scene stuff
  const scene = new THREE.Scene();
  const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 5)
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new THREE.WebGLRenderer();
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
  const cubeMesh = new THREE.MeshBasicMaterial({
    color: 0x9c191b,
    wireframe: true
  })
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube, hemiLight, cubeMesh );
      
  camera.position.z = 3;

  const animate =() => {

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
  
      renderer.render( scene, camera );
  };

const checkWebGL = ()=>{
  if ( WebGL.isWebGL2Available() ) {
    renderer.setAnimationLoop( animate );
  } else {
    const warning = WebGL.getWebGL2ErrorMessage();
	  document.getElementById( 'container' ).appendChild( warning );
  }
}

checkWebGL();

  return (
    <div className="App">
      <h1>Hello Three</h1>
    </div>
  );
}

export default App;
