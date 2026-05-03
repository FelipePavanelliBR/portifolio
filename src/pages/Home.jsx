import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.esm.jsx";

export default function Home() {
  return (
    <div style={{ height: "500vh" }}>
      <ScrollyVideo src="/biped.mp4" 
      transitionSpeed="2"
      frameThreshold="0.05"/>
      
    </div>
  );
}
