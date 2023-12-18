import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = ()=>{

    const [ categories, setCategories ] = useState([ 'One Punch']);
        
    const onAddCategory = (newCategory) =>{

        function validateArray(valor, array){
            valor = valor.toLowerCase();
            array = array.map(item => item.toLowerCase());
            if (array.includes(valor)) {
                return true; 
            } else {
                return false;
            }
        }
        if(validateArray(newCategory, categories)){
            if(categories.includes(newCategory)) return;
        }else{
            setCategories([newCategory, ...categories]);
        }
    }
    return(
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory 
            onNewCategory = {(value) => onAddCategory(value)}
            />
            {
                categories.map((category) => (
                    <GifGrid
                            key={category} 
                            category = {category}/>
                ))
            }
 
        </>
    )
}