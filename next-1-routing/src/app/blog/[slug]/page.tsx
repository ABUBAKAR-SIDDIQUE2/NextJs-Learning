export default function Home( {params}: {params: { slug: string }} ){
    return (
        <div>
            This is a slug:- {params.slug}
        </div>
    )
}

