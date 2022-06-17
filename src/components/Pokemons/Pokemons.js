import React, {useEffect, useState} from 'react';

const Pokemons = () => {
    const [inp1Value, setInp1Value] = useState("")
    const [inp2Value,setInp2Value] = useState("")
    // console.log(inp1Value,inp2Value)

    // callback отработает один раз при рендере страницы, так как массив зависимостей пустой
    // useEffect(() => {
    //     console.log("3123")
    // }, [])

    // следит за изменением в стейте inp1Value и inp2Value
    // useEffect(()=> {
    //     console.log('useEffect!');
    // },[inp1Value,inp2Value]);

    // следит за изменением во всех стейтах
    // useEffect(()=> {
    //     console.log('useEffect!')})

    return (
        <div>
            <input
                type="text"
                value={inp1Value}
                onChange={(e) => setInp1Value(e.target.value)}
                placeholder="input 1"
            />
            <input type="text"
            placeholder="input 2"
                   value={inp2Value}
                   onChange={(e) => setInp2Value(e.target.value)}
            />
        </div>
    );
};

export default Pokemons;
