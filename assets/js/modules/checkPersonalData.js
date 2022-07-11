import getDataUser from "../userData/userData.js";

const checkPersonalData = async () => {
    const user = await getDataUser()
    if(!user.nombre || !user.apellido || !user.fechaNacimiento || !user.nacionalidad || !user.sexo){
        window.location.replace('/personalData.html')
    }
}

checkPersonalData()