class Cursos{
    static cursos = ["JavaScript", "HTML", "CSS", "Arduino", "Raspeberry", "C++", "Python", "Java", "C#"]
    constructor(){}
    static getTodosCursos=()=>{
        return this.cursos
    }
    static getCurso=()=>{
        return this.cursos[i_curso]
    }
    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    static apagarCursos=()=>{
        this.cursos = []
    }
}
export default Cursos
// const cursos = ["JavaScript", "HTML", "CSS", "Arduino", "Raspeberry", "C++", "Python", "Java", "C#"]

// export {cursos, getCurso}
