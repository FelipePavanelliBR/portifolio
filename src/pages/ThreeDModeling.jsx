import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Model3DViewer from "../components/Model3DViewer";

export default function ThreeDModeling() {
  // Sample model data - replace with your actual models
  const models = [
    {
      id: 1,
      title: "Fan",
      description: "For Room Project",
      modelUrl: "/models/fan2.glb",
    },
    {
      id: 2,
      title: "Fan",
      description: "For Room Project",
      modelUrl: "/models/fan2.glb",
    },
    {
      id: 3,
      title: "Fan",
      description: "For Room Project",
      modelUrl: "/models/fan2.glb",
    },
  ];

  return (
    <div className="category-page threед-page">
      <Navigation />

      <main className="threед-content">
        <div className="threед-header">
          <h1>3D Modeling</h1>
          <p className="threед-subtitle">
            Interactive 3D models - Click and drag to rotate
          </p>
        </div>

        <div className="models-grid">
          {models.map((model) => (
            <div key={model.id} className="model-card">
              <div className="model-canvas-container">
                <Model3DViewer modelUrl={model.modelUrl} />
              </div>
              <div className="model-info">
                <h2>{model.title}</h2>
                <p>{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
