import * as THREE from 'three'

import App from "./App";

export default class Renderer {
    constructor() {
        this.app = new App()
        this.canvas = this.app.canvas
        this.sizes = this.app.sizes
        this.scene = this.app.scene
        this.camera = this.app.camera

        this.setInstance()
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    resize(){
        this.instance.setSize(this.sizes.width,this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update(){
        this.instance.render(this.scene,this.camera.instance)
    }
}