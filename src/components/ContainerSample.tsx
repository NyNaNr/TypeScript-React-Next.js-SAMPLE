import React from 'react'

type ContainerProps = {
    title: string
    children: React.ReactNode
}


const Container = (props: ContainerProps) : JSX.Element => {
    const {title, children} = props
    return(
        <div style={{ background: 'yellow'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        <Container title="Helllllllo">
            <p>ここの部分が背景色で囲まれます。
                
                まんたま
            </p>
        </Container>
    )
}

export default Parent