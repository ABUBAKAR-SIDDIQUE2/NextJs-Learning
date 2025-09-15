export default function Home( {params}: { params: { test: string } } ){
    return (
        <div>this is a test slug: {params.test}</div>
    )
}