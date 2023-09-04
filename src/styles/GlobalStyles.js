import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --main-color: rgb(188, 188, 188);
    --accent-color: rgba(244, 27, 59, 0.8); 
    --title-color: rgb(218, 165, 32);
    --bg-color: rgb(30, 30, 30);
    --bg-components: rgba(30, 30, 30, 1);
    --button-box-shadow: 0px 0px 1px 2px rgba(188, 188, 188, 0.3);
    --border-color: rgba(188, 188, 188, 0.3);
    --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    --li-box-shadow: 0px -10px 27px 0px rgba(0, 0, 0, 0.74);
  }

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: var(--main-color);
  background-color: rgb(188, 188, 188);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

h1 {
  font-weight: 600;
  font-size: 36px;
  line-height: 1.4;
}
  
h2 {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 20px;
}

h3 {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  
}

p{
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
}

ul {
  list-style: none;
  margin-left: 0;
  margin-right: 0;
}

button, input {
  outline: none;
}

button {
  cursor: pointer;
  }

`;

export const commonContainerStyles = `
width: 100%;
padding: 0 16px;

  @media (min-width: 480px) {
    max-width: 480px;
    margin: 0 auto;

  }
  
  @media (min-width: 768px) {
    max-width: 768px;

  }
  
  @media (min-width: 1200px) {
    max-width: 1200px;

  }
  `;

export const commonWrapper = `
    display: flex;
    flex-direction: column;
    padding: 12px 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
