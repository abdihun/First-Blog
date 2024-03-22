const handleFormSubmit = function (event) {
    event.preventDefault()
    console.log("test")
    const username = document.querySelector("#username").value.trim()
    const title = document.querySelector('#title').value.trim()
    const content = document.querySelector('#content').value.trim()

    if (!username || !title || !content) {
        const error = document.querySelector("#error")
        error.textContent = "invalid input, must complete form"
        setTimeout(function () {
            error.textContent = "";

        }, 2000)
        return
    }
    const data = {
        userName: username,
        title: title,
        content: content,

    }
    handleLocalStorage(data)
}

const handleLocalStorage = function (data) {
    let blogs = JSON.parse(localStorage.getItem("blogdata")) || []

    blogs.push(data)
    localStorage.setItem("blogdata", JSON.stringify(blogs))
    location.href = "blog.html"
}




document.querySelector("#form").addEventListener("submit", handleFormSubmit)