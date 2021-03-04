import React from 'react'

export default (props) => {

    const { id, name, types } = props
    
    return(
            <li
                style={{
                    backgroundColor: "red", 
                    display: 'flex',
                    listStyle: 'none', 
                    minWidth: '300px',
                    minHeight: '250px',
                    margin: '10px',
                    borderRadius: '15px',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {types ?
                    <>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} 
                        style={{width: '100px', height: '100px'}}/>
                        <h2 style={{textTransform: 'capitalize'}}>{ id }. { name}</h2>
                        <p>{ types.map(pokeTypes => pokeTypes.type.name).join(' | ') }</p>
                    </>
                    :
                    <p>Não encontrado</p>
                }
            </li>
            
            
        
    
    )
    
       
    
}