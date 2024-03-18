import { createBrowserRouter } from "react-router-dom";

import { Menu, ImpureRendering, EffectCleanup, DeprecatedApi, Example } from "../components";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu />
    },
    {
        path: '/impure-rendering',
        element: <ImpureRendering />
    },
    {
        path: '/effect-cleanup',
        element: <EffectCleanup />
    },
    {
        path: '/deprecated-api',
        element: <DeprecatedApi />
    },
    {
        path: '/example',
        element: <Example />
    }
]);