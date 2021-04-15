
const views = createViews()

function createViews() {
  return [
    {
      type: "circle",
      htmlNode: document.querySelector("#viwew-item-1")
    },
    {
      type: "square",
      htmlNode: document.querySelector("#viwew-item-2")
    },
    {
      type: "circle",
      htmlNode: document.querySelector("#viwew-item-3")
    },
    {
      type: "circle",
      htmlNode: document.querySelector("#viwew-item-4")
    },
    {
      type: "square",
      htmlNode: document.querySelector("#viwew-item-5")
    },
    {
      type: "rounded",
      htmlNode: document.querySelector("#viwew-item-6")
    },
    {
      type: "circle",
      htmlNode: document.querySelector("#viwew-item-7")
    },
  ]
}

const circleViews = views.filter(value => value.type === "circle");
const squareViews = views.filter(value => value.type === "square");
const roundedViews = views.filter(value => value.type === "rounded");

const roundedAndCircleViews = [...circleViews, ...roundedViews]

views.forEach(v => {
  const className = "item-hovered"
  node = v.htmlNode
  node.addEventListener('mouseenter', () => {
    views.filter(value => value.type === v.type)
    .forEach(value => value.htmlNode.classList.add(className))
  })
  node.addEventListener('mouseleave', () => {
    views.filter(value => value.type === v.type)
    .forEach(value => value.htmlNode.classList.remove(className))
  })
})