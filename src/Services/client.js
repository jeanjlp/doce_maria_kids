import ApiAxios from '../API'

export const getClient = async () =>{
    const response = await ApiAxios.get('/client')
    return response.data
}

export const postClient = async({name, surname, email, senha}) =>{
    const response = await ApiAxios.post('/client',{name, surname, email, senha})
    return response.data
}

export const getClientById = async(user_id) =>{
    const response = await ApiAxios.get(`/client/${user_id}`)
    return response.data[0]
    
}

export const putClient = async(user_id, {name, surname, email, senha, nick_name}) =>{
    const response = await ApiAxios.put(`/client/${user_id}`, {name, surname, email, senha, nick_name})
    return response.data
}

export const deleteClientById = async(user_id) =>{
    await ApiAxios.delete(`/client/${user_id}`)
}