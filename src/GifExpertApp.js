import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['Gatos']);
    const h2 = <h2>GifExpertApp</h2>;
    const addCategory = <AddCategory setCategorias={setCategorias}/>;
    return (
        <>
            {h2}
            <hr />
            {addCategory}
            <ul>
            {
                categorias.map( category => 
                <GifGrid
                    category={category}
                    key={category}    
                />)
            }
            </ul>
            
        </>
    )
};

export default GifExpertApp;