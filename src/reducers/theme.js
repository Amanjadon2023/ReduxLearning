const intialTheme='light'
export const getTheme=(state=intialTheme,action)=>{
if(action.type==='dark'){
    return 'dark'
    
}
return 'light'
}