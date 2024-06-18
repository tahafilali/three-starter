import * as THREE from 'three'

import App from "../App";

export default class World {
    constructor(){
        this.app = new App()
        this.scene = this.app.scene
        
        
        // Test Mesh
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry(2,2,2),
            new THREE.MeshBasicMaterial({wireframe:true})
        )

        this.scene.add(testMesh)
    }
}