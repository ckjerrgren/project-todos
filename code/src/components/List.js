import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from 'reducers/todos'
import { Item } from './Item'

export const List = () => {
    const dispatch = useDispatch()
    const items = useSelector((store) => store.todos.items )
    
    return (
    <ListContainer>
    {items.map((item, index) => (
    <Item key={index} item={item}></Item>
    ))}
    <ListActionButton onClick={() => dispatch(todos.actions.removeOne())}> REMOVE ONE</ListActionButton>
    </ListContainer>
    )
}

const ListContainer = styled.ul`
display: flex;
width: 100%;
flex-direction: column;
`

const ListActionButton = styled.button`
    align-self: center;
    padding: 4px; 
    margin: 2px;
    font-size: 22px;
    color: #3f3f3f;
`