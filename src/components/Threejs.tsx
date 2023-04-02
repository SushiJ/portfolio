import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React, { useRef, useState } from "react"

function Sphere(props: { color: string }) {
    return (
        <mesh>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial color={props.color} />
            <perspectiveCamera args={[45, 1, 0.1, 100]} position={[0, 0, 40]} />
        </mesh>
    )
}
function ThreeRender() {
    const root = useRef()
    const [color, setColor] = useState("#FF9CBE")
    const [mouseDown, setMouseDown] = useState(false)
    let rgb = []

    function mouseMove(e: any) {
        if (mouseDown) {
        }
    }
    return (
        <Canvas
            ref={root}
            style={{ height: "512px", width: "512px" }}
            onMouseDown={() => setMouseDown(true)}
            onMouseUp={() => setMouseDown(false)}
            onMouseLeave={() => setMouseDown(false)}
            onMouseMove={mouseMove}
        >
            <pointLight position={[0, 10, 10]} color="0xffffff" />
            <Sphere color={color} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={2.5}
            />
        </Canvas>
    )
}

export default ThreeRender
