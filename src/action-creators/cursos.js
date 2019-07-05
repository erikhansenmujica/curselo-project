import {ADD_CURSOS} from "./constants"

const addCursos = (cursos)=>({
    type:ADD_CURSOS,
    cursos
})

export const fetchCursos = () => (dispatch)=>
    db.collection("cursos").get()
    .then(curso=>{
        const arr = []
        curso.forEach(doc=> {
            const obj=doc.data()
            obj["id"]=doc.id
            arr.push(obj)
        });
        dispatch(addCursos(arr))
    });
