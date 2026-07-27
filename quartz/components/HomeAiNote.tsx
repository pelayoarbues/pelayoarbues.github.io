import { QuartzComponentConstructor } from "./types"

function HomeAiNote() {
  return (
    <p class="home-ai-note">
      Curious how I use AI to build this site? Visit the{" "}
      <a href="./mocs/ai" class="internal">
        <strong>AI page</strong>
      </a>
      .
    </p>
  )
}

export default (() => HomeAiNote) satisfies QuartzComponentConstructor
