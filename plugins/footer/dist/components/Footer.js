import { h } from "preact"

const style = `footer {
  text-align: left;
  margin-bottom: 4rem;
  opacity: 0.7;
}

footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: -1rem;
}
`

export default (opts) => {
  const Footer = ({ displayClass }) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? {}

    return h(
      "footer",
      { class: displayClass ?? "" },
      h(
        "p",
        null,
        "Created with ",
        h("a", { href: "https://quartz.jzhao.xyz/" }, "Quartz"),
        " · ",
        h("a", { href: "https://www.pelayoarbues.com/mocs/ai" }, "AI workflow"),
        ` · © ${year}`,
      ),
      h(
        "ul",
        null,
        ...Object.entries(links).map(([text, link]) => h("li", null, h("a", { href: link }, text))),
      ),
    )
  }

  Footer.css = style
  return Footer
}
