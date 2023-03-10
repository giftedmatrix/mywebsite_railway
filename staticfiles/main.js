const moonIcon = document.getElementById('moon')
const sunIcon = document.getElementById('sun')

const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('prefered-color-scheme: dark').matches

const iconToggle = ()=>{
    sunIcon.classList.toggle('display-none')
    moonIcon.classList.toggle('display-none')   
}

const themeCheck = ()=>{
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        moonIcon.classList.add('display-none')
        document.documentElement.classList.add('dark')
        return
    }
    sunIcon.classList.add('display-none')
   
}

const themeSwitch = ()=>{
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'Light')
        iconToggle()
        return
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    iconToggle()
}

moonIcon.addEventListener('click', ()=>{
    themeSwitch()
})

sunIcon.addEventListener('click', ()=>{
    themeSwitch()
})

themeCheck()
