import { GlobalContextProvider } from './store';


export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (<GlobalContextProvider>{children}</GlobalContextProvider>
  )
}