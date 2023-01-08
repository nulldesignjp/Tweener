import './style.css'

import * as THREE from 'three'
import Tweener from './Tweener.js'

const canvas = document.querySelector('canvas.webgl');

const width = window.innerWidth
const height = window.innerHeight
const pixelRatio = Math.min(window.devicePixelRatio, 2)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100)

camera.position.set(0, 0, 8)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})

renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.CineonToneMapping
renderer.toneMappingExposure = 1.75
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

renderer.setClearColor('#211d20');
// renderer.setClearColor('#FFFFFF');
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(pixelRatio, 2));

(function _loop(){
	window.requestAnimationFrame( _loop );

	renderer.render( scene, camera )
})()

Tweener.init();


for( var i = 0; i < 8; i++ )
{
	var _geometry = new THREE.IcosahedronGeometry(0.25,1)
	var _material = new THREE.MeshBasicMaterial({
		color: 0x000000,
		wireframe: true
	})
	var _mesh = new THREE.Mesh( _geometry, _material )
	scene.add(_mesh)
	move(_mesh)
}

function move(_mesh)
{	var _delay = Math.random()
	Tweener.addTween(
		_mesh,
		{
			position: new THREE.Vector3((Math.random()-0.5)*5,(Math.random()-0.5)*5,(Math.random()-0.5)*5),
			delay: _delay,
			duration: 1.0,
			transition: 'easeInOutCubic',
			onComplete: function(){
				move( _mesh )
			}
		})
	Tweener.addTween(
		_mesh,
		{
			rotation: new THREE.Vector3(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),
			delay: _delay,
			duration: 1.0,
			transition: 'easeInOutSine'
		})

	var _scale = (Math.random()-0.5)*2 + 2
	Tweener.addTween(
		_mesh,
		{
			scale: new THREE.Vector3(_scale,_scale,_scale),
			delay: _delay,
			duration: 1.0,
			transition: 'easeOutElastic'
		})

	Tweener.addTween(_mesh,{color: new THREE.Color( Math.random(),Math.random(),Math.random()), duration: 1,delay: _delay})

}



//	uniforms
const _uniforms = {
	time: {	value: 0 },
	opacity: {	value: 1 },
	resolution: {	value: new THREE.Vector2( 10,10)}
}

var _geometry = new THREE.PlaneGeometry(1,1)
var _material = new THREE.ShaderMaterial({
	uniforms: _uniforms,
	vertexShader: [
		"uniform vec2 resolution;",
		"varying vec2 vUv;",
		"void main() {",
		"vUv = uv;",
		"gl_Position = projectionMatrix * modelViewMatrix * vec4( position * vec3( resolution, 1.0 ), 1.0 );",
		"}"
	].join("\n"),

	fragmentShader: [
		"uniform float time;",
		"uniform float opacity;",
		"varying vec2 vUv;",

		"void main() {",
		    "gl_FragColor = vec4(vUv, sin(time)*.5+.5, opacity);",
		"}"
	].join("\n"),
	transparent: true
});

var _s = new THREE.Mesh( _geometry, _material )
scene.add(_s )
changeColor( _s )

function changeColor( _s )
{
	let _scale = Math.random() * 2 + 1;
	var _t = Tweener.addTween(_s,{
		uniforms: {
			time: Math.random() * Math.PI * 2,
			resolution: new THREE.Vector2( _scale, _scale )
		},
		duration: 5.0,
		delay: 1.0,
		onComplete: function()
		{
			changeColor( _s )
		}
	})
	console.log( _t.transitionName, _t.transition, _t )
}


