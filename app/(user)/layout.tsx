import Head from "next/head"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {


    return (
        <>
            <main className="min-h-screen bg-gray-100 px-4 py-10">
                <Head>
                    <title>Dashboard | MyPortfolio</title>
                </Head>
                <div className="max-w-5xl mx-auto">
                    { children }
                </div>
            </main>
        </>
    )
}


export default DashboardLayout
