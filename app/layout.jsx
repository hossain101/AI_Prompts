import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';




export const matadata = {
  title: 'ai_prompt',
  description: 'Discover and share AI generated prompts',
  
}

const RootLayout = ({children}) => {
  return (
   <html lang='en'>
   
    <body  suppressHydrationWarning={true}>
    <Provider>
        <div className='main'>
            <div className="gradient"/>
        </div>
        <main className='app'>
            <Nav />
            {children}
        </main>
        </Provider>
    </body>
    
   </html>
  )
}

export default RootLayout