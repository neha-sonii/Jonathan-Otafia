import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

const MainPage = React.lazy(() => import('../pages/index'));
const QuestionnairePage = React.lazy(() => import('../pages/questionnaire'));

function App() {
    return (
        <Router>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/questionnaire" element={<QuestionnairePage />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

function PageLoader() {
    return (
        <div className="min-h-screen bg-black" aria-label="Page loading">
            <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-5">
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/[0.04]" />
            </div>
        </div>
    );
}

export default App;
