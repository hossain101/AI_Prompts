import '@styles/globals.css';


export const matadata = {
  title: 'ai_prompt',
  description: 'Discover and share AI generated prompts',
  
}

const RootLayout = ({children}) => {
  return (
   <html lang='en'>
    <body>
        <div className='main'>
            <div className="gradient"/>
        </div>
        <main className='app'>
            {children}
        </main>
    </body>

   </html>
  )
}

export default RootLayout