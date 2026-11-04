import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Sentti · Joyas que se sienten",description:"Una primera mirada al universo Sentti. Propuesta visual de tienda online."};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="es"><body>{children}</body></html>}
