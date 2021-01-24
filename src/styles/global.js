import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700&display=swap');
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
body{
    background: #23262B;
    -webkit-font-smoothing: antialiased;
    margin: 32px;
}
body, input, button {
 font: 14px Roboto,sans-serif;
}
button{
    cursor: pointer;
}
header{
    display:flex;
    justify-content:center;
    margin:16px;
}
`;
