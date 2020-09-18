import React, {lazy, Suspense} from "react";

const WelcomeDialog = lazy(() => import("./components/WelcomeDialog"));
const Clock =  lazy(() => import("./components/Clock"));
const Game =  lazy(() => import("./components/game/Game"));


function LazyApp() {
    return (
        <div>
            <Suspense fallback={<div>Загрузка...</div>}>
                <WelcomeDialog />
                <Clock />
                <Game />
            </Suspense>
        </div>
    );
}

export default LazyApp;
