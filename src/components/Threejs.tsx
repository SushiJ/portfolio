import { Canvas } from "@react-three/fiber";

function ThreeRender() {
  return (
    <Canvas
      className="bg-gray-900 rounded-sm"
      style={{ height: "512px", width: "512px" }}
    >
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}

export default ThreeRender;
