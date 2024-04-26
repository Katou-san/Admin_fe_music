

export default function page({ children }: { children: React.ReactNode }) {
    return (
        <section className='current-content'>
            {children}
        </section>)
}