import DisciplinePlaceholder from "../components/DisciplinePlaceholder";

export default function BeatBop() {
  return (
    <DisciplinePlaceholder
      title="BeatBop"
      intro="An XR rhythm experience combining AR and VR, driven by my own-coded, music-driven state machine that scores the play in time with the track."
      headerBackHref="/games"
      headerBackLabel="← Games"
      cardKicker="In progress"
      cardHeading="Case study in progress"
      cardBody="I'm writing up the full breakdown — ideation, the music-driven state machine, and the AR/VR build. Check back soon."
      backHref="/games"
      backLabel="← back to Games"
    />
  );
}
