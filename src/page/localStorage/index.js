export const saveJWT = (value) => {
    localStorage.setItem('jwt', value);
}

export const getJWT = () => {
    return localStorage.getItem('jwt');
}

export const deleteJWT = () => {
    return localStorage.removeItem('jwt');
}

export const saveOrganizationUUID = (value) => {
    localStorage.setItem('organization_uuid', value);
}

export const getOrganizationUUID = () => {
    return localStorage.getItem('organization_uuid');
}

export const deleteOrganizationUUID = () => {
    return localStorage.removeItem('organization_uuid');
}

export const saveUserUUID = (value) => {
    localStorage.setItem('user_uuid', value);
}

export const getUserUUID = () => {
    return localStorage.getItem('user_uuid');
}

export const deleteUserUUID = () => {
    return localStorage.removeItem('user_uuid');
}