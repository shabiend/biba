let flag = true
window.addEventListener ("scroll", (event) => {
    console.log (this.scrollY)
    if (this.scrollY >= 3600 && flag) {
        alert ("Ну че, го в доту, пидор?:)")
        flag = false
    }
})
