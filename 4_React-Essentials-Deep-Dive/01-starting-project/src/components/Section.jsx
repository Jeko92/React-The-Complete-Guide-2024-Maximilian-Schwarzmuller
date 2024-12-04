// export default function Section({ title, id, children }){
export default function Section({ title, children, ...props }){
    // return <section id={id}>
    return <section {...props}>
        <h2>{ title }</h2>
        { children }
    </section>

}