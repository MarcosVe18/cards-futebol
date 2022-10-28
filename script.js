
let isIgnite= true
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(nlw-copa-card-main/assets/bg-${bg}.svg)`
}