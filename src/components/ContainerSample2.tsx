import React from 'react'


//P90


const TitleContext = React.createContext('')


const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title2) => {
                return <h1>{title2}</h1>
            }}
        
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    )
}

const Page = () => {
    const title2 = 'React Book'
    return (
        <TitleContext.Provider value={title2}>
            <Header />
        </TitleContext.Provider>
    )
}



export default Page