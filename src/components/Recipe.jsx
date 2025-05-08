import Markdown from "react-markdown"

export default function Recipe({recipe}) {

  const markdown = recipe
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <Markdown>{markdown}</Markdown>
    </section>
  )
}