import { Component, lazy, Suspense, useState } from "react";
const ModelViewer = lazy(() => import("./ModelViewer.jsx"));

const base = import.meta.env.BASE_URL;

// If the viewer cannot start, the can photo stays visible.
class ViewerFallback extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function CanPreview() {
  const [loaded, setLoaded] = useState(false);
  const [rotating, setRotating] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  return (
    <div className="can-preview">
      <img
        className={loaded ? "can-photo can-photo-hidden" : "can-photo"}
        src={base + "images/coke-zero.webp"}
        alt="Coca-Cola Zero Sugar can"
      />
      <div className="can-model" role="img" aria-label="3D cola can">
        <ViewerFallback onError={() => setLoaded(false)}>
          <Suspense fallback={null}>
            <ModelViewer
              url={base + "models/cola-can.glb"}
              width="100%"
              height="100%"
              autoRotate={rotating}
              autoRotateDelay={0}
              autoRotateSpeed={0.5}
              turntable
              tilt={8}
              offsetY={0}
              offsetX={0}
              hoverTilt={0.1}
              float={0.3}
              zoom={false}
              intro="none"
              onModelLoaded={() => setLoaded(true)}
            />
          </Suspense>
        </ViewerFallback>
      </div>
      {/* {loaded && (
        <button type="button" onClick={() => setRotating(!rotating)}>
          {rotating ? "Pause rotation" : "Play rotation"}
        </button>
      )} */}
    </div>
  );
}
