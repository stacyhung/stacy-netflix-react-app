import React, { useState } from "react";
import { Body, Title, Header, Container, Inner, Item, Frame } from "./styles/accordian";

export default function Accordian({ children, ...restProps }) {
    return (
        <Container {...restProps} >
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordian.Frame = function AccordianFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>;
}

Accordian.Item = function AccordianItem({children, ...restProps}) {
    return <Item {...restProps}>{children}</Item>;
}

Accordian.Title = function AccordianTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
}

Accordian.Header = function AccordianHeader({children, ...restProps}) {
    return <Header {...restProps}>{children}</Header>;
}

Accordian.Body = function AccordianBody({children, ...restProps}) {
    return <Body {...restProps}>{children}</Body>;
}