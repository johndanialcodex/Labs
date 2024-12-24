

const redditUrl = "https://www.reddit.com/r/aww/.json"

const printAww = async () => {
    const response = await fetch(redditUrl)
    const date = await response.json()
    console.log(date)
}
printAww()

const getAwwPosts = async () => {
	const response = await fetch(redditUrl)
	const data = await response.json()
	return data.data.children.map(post => post.data)
    
}

const addAllTitles = async () => {
	const posts = await getAwwPosts()
	for (const post of posts) {
        const { title, thumbnail, url } = post

		const div = document.createElement("div")
		div.innerText = title
	
	

    if (thumbnail && thumbnail.startsWith("http")) {
        const image = document.createElement("img");
        image.src = thumbnail;
        image.alt = title;
        div.appendChild(image);
      }

      const link = document.createElement("a")
      link.href = url
      link.textContent = "View Post"
      link.target = "_blank"
      div.appendChild(link)

      document.body.appendChild(div)

}}

addAllTitles()