let linksElement = document.getElementById('links')

const toggleMenu = () => {
  const display = linksElement.style.display
  linksElement.style.display = display === 'block' ? 'none' : 'block'
}

const reportWindowSize = () => {
  window.innerWidth > 430 && (linksElement.style.display = 'block')
}

window.addEventListener('resize', reportWindowSize)