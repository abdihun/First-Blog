const main=document.querySelector(".main")
const displayBlogs=function(){
    const blogs=JSON.parse(localStorage.getItem("blogdata"))||[]
    if(!blogs.length){
        const p=document.createElement("p")
        p.textContent="NO BLOGS YET"
        main.append(p)
    }else{
        for (let i = 0; i < blogs.length;i++) {
            const titleEl=document.createElement("h2")
            titleEl.textContent=blogs[i].title
            const contentEl=document.createElement("i")
            contentEl.textContent=blogs[i].content
            const userEl=document.createElement('p')
            userEl.textContent=blogs[i].userName
            const hrEl=document.createElement('hr')
            hrEl.createElement=blogs[i].content
            const blogEl=document.createElement('div')
            blogEl.append(titleEl,contentEl,userEl,hrEl)
            main.append(blogEl)
            
        }
    }

}
displayBlogs()