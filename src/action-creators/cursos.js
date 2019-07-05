import {ADD_CURSOS} from "./constants"

const addCursos = (cursos)=>({
    type:ADD_CURSOS,
    cursos
})

export const fetchCursos = () => {

    db.collection("cursos").get()
    .then(curso=>{
        const arr = []
        curso.forEach(doc=> {
            
            console.log(doc.id, " => ", doc.data());
        });
    });
}