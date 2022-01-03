const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.textContent = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.textContent

    const increment = target / 200

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`

      setTimeout(updateCounter, 1)
    } else {
      counter.textContent = target
    }
  }

  updateCounter()
})
