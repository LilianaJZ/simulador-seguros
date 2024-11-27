import Home from "../page/Home"
import Simulador from "../page/Simulador";

export let router = [
    {
        path:"/",
        element: <Home />, 
    },
    {
        path:"/simulador",
        element: <Simulador />, 
    }
];