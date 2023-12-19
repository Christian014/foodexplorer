import  { styled, createGlobalStyle } from "styled-components";
const CreateGlobalStyle = createGlobalStyle  `
    
    
    *{
        
        padding: 0;
        margin: 0;
        font-family: 'Roboto Slab', serif;

        >body{
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_GLOBAL};
        }
    }

`;

export default CreateGlobalStyle;