import React from "react"

interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => <h1>{title}</h1>

export default Title