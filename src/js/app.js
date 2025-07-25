import AOS from './libs/aos'
import aosConfig from './modules/aosConfig'
import swipers from './modules/swiper'

const getModal = name => {
  return document?.querySelector(`[data-modal-${name}]`)
}

const setModalState = (modal, activate) => {
  const action = activate ? 'add' : 'remove'
  modal?.classList[action]('active')
}

addEventListener('load', async () => {
  // AOS
  AOS.init(aosConfig)

  // Header
  const headerContainer = document.getElementById('header')

  if (window.location.pathname.includes('privacy')) {
    headerContainer.classList.add('active')
  } else {
    const callback = entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          headerContainer.classList.add('active')
        } else {
          headerContainer.classList.remove('active')
        }
      })
    }

    let observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0,
    })

    observer.observe(document.getElementById('headerAnchor'))
  }

  // Terms
  const termsOpenBtn = document.querySelector('[data-terms-btn]')
  const termsModal = getModal('terms')
  const termsCloseBtn = document.querySelector('[data-terms-close]')

  termsOpenBtn?.addEventListener('click', () => {
    setModalState(termsModal, true)
  })
  termsCloseBtn?.addEventListener('click', () => {
    setModalState(termsModal, false)
  })
  termsModal.addEventListener('click', e => {
    if (e.target === termsModal) {
      setModalState(termsModal, false)
    }
  })

  // Swipers
  swipers.downloadImagesSwiper()
  swipers.downloadItemsSwiper()
})
