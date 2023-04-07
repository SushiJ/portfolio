import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Sphere(props: { color: string }) {
  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color={props.color} />
      <perspectiveCamera args={[45, 1, 0.1, 100]} position={[0, 0, 40]} />
    </mesh>
  );
}
function ThreeRender() {
  return (
    <Canvas style={{ height: "512px", width: "512px" }}>
      <pointLight position={[0, 10, 10]} color="0xffffff" />
      <Sphere color={"#FF9CBE"} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={5}
      />
    </Canvas>
  );
}

export default ThreeRender;
