const LPOST = document.getElementById("postListe")

fetch('data/post.json')
    .then(response => response.json())
    .then(posts => {
        for(i = 0; i < posts.length; i++){
            let sPost = document.createElement('div')
            sPost.classList.add("vueArticle")
            let tPost = document.createElement('h2')
            tPost.classList.add("titreArticle")
            let cPost = document.createElement("div")
            cPost.classList.add("contenuArticle")
            let mPost = document.createElement("p")
            mPost.classList.add("metaArticle")

            tPost.innerText = posts[i].titre
            cPost.innerHTML = posts[i].article
            mPost.innerText = `Auteur: Joshua L.J. Vachon`

            sPost.appendChild(tPost)
            sPost.appendChild(mPost)
            sPost.appendChild(cPost)
            LPOST.appendChild(sPost)
        }
    })