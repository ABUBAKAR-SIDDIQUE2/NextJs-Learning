export async function generateStaticParams(){
    const posts = await fetch("https://.../blog").then(response => response.json())
    return posts.map(post => ({slug: {post.slug}}))
}