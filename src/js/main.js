const navBtn = document.querySelector('.nav__btn')
const navMobile = document.querySelector('.nav__mobile')
const navMobileItems = document.querySelectorAll('.nav__mobile-item')
const navDesktopItems = document.querySelectorAll('.nav__item')
const scrollSpy = document.querySelectorAll('.section')
const cookies = document.querySelector('.cookies')
const cookiesBtn = document.querySelector('.cookies__btn')
const body = document.querySelector('body')

const handleNav = () => {
	navMobile.classList.toggle('show-menu')
	body.classList.toggle('scroll-block')
	navMobileItems.forEach(e => {
		const navItem = e
		navMobile.addEventListener('click', () => {
			if (event.target == navItem) {
				navMobile.classList.remove('show-menu')
				body.classList.remove('scroll-block')
			} else {
				navMobile.classList.remove('show-menu')
				body.classList.remove('scroll-block')
			}
		})
	})
}

const handleScrollSpy = () => {
	if (body.classList.contains('main-page')) {
		const sections = []

		scrollSpy.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 83) {
				sections.push(section)
				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
				navDesktopItems.forEach(item => item.classList.remove('active'))
				activeSection.classList.add('active')
			}
		})
	}
}

navBtn.addEventListener('click', handleNav)
cookiesBtn.addEventListener('click', () => {
	cookies.classList.add('hide-cookies')
})
window.addEventListener('scroll', handleScrollSpy)
