import Layout from "/components/layout/Layout"
import FeaturedSolutions from "/components/sections/FeaturedSolutions"
import Plus from "/components/sections/Plus"
import Person from "/components/sections/Person"
import Experiencase from "/components/sections/Experiencase"
import Skills from "/components/sections/Skills"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-dark light-hero-header">
                <Person />
                <hr className="divider" />
                <Experiencase />
                <Plus />
                <hr className="divider" />
                <Skills />
                <FeaturedSolutions />
                <hr className="divider" />
            </Layout>
        </>
    )
}