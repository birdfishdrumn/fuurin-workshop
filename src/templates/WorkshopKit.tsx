import React from 'react'
import { SectionWrapping,Title,Text} from "assets/GlobalLayoutStyle"
import styled from "styled-components";


const HelpNav = styled.ul`
 list-style:none;
 margin:10px 0;
>li{
  padding:10px 0;
}
`

const Help = () => {
  return (
    <div>

      <SectionWrapping>
            <Title>体験キットについて</Title>

      </SectionWrapping>
      </div>
  )
}

export default Help
