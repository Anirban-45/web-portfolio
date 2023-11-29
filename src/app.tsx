import "./app.css";
import Routes from "./routes/routes.navigator";
import Layout from "./components/layout/Layout";
import '@mantine/core/styles.css';

export function App() {
    return (
        <>
            <Layout>
                {/* Your other components */}
                <Routes />
            </Layout>
        </>
    );
}
