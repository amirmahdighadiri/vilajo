import Header from "../../components/lsyout/Header/Header";

export default function SiteLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}