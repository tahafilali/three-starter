import * as THREE from 'three'

import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'


let instance = null

export default class App{
    constructor(canvas){

        // Singleton
        if(instance){
            return instance
        }

        instance = this

        // Global access
        window.app = this

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        this.sizes.on('resize',()=>{
            this.resize()
        })

        this.time.on('tick',()=>{
            this.update()
        })
    }

    resize(){
        this.camera.resize()
        this.renderer.resize()
    }

    update(){
        this.camera.update()
        this.renderer.update()
    }
}