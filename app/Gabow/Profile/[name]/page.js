export default function ({ params }) {
    return <p>You are visiting {decodeURIComponent(params.name)} profile in gabow</p>
}