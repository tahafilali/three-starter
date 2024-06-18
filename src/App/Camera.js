import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import App from "./App";

export default class Camera{
    constructor(){
        this.app = new App()
        this.sizes = this.app.sizes
        this.scene = this.app.scene
        this.canvas = this.app.canvas

        this.setInstance()
        this.setOrbitControl()
    }

    setInstance(){
        this.instance = new THREE.PerspectiveCamera(35,this.sizes.width/this.sizes.height,0.1,1000)
        this.instance.position.set(6,4,8)
        this.scene.add(this.instance)
    }

    setOrbitControl(){
        this.orbitControls = new OrbitControls(this.instance,this.canvas)
        this.orbitControls.enableDamping = true
    }

    resize(){
        this.instance.aspect = this.sizes.width/this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update(){
        this.orbitControls.update()
    }
}