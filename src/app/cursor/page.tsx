import CursorShader from "@/src/components/cursorGlow.tsx/CursorShader";
import CursorGlow from "@/src/components/cursorGlow.tsx/CursorShader";

const Cursor = () => {
    return (
        <CursorShader className="min-h-screen">
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-7xl font-bold text-white">
          Shader Test
        </h1>
      </div>
    </CursorShader>
    );
};

export default Cursor;