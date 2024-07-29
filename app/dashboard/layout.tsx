/*
layout will accept children prop
this prop will be populated
shared with the pages in the dashboard
*/

export default function DashboardLayout({
    children, // will be a page
}:{
    children: React.ReactNode
}) {
    return (
        <section>
            <p>Hello ni hao</p> {/*shared UI here*/}
            <nav></nav>

            {children}
        </section>
    )
}