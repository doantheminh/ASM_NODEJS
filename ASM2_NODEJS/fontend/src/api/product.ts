import instance from "./instance"

export const getAll = () => {
    return instance.get('/product')
}

export const getOne = async (id: string) => {
    const res = await instance.get(`/product/${id}`);
    return res;
}

export const editProduct = async (data, id) => {
    try {
        const response = await instance.put(`/product/${id}`, data, {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem('token')
            }
        })
        if (response.status === 200) {
            alert(response.data.message);
            window.location.reload()
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            alert(error.response.data.message);
        } else {
            console.log(error);
        }
    }
}

export const deleteProduct = async (id: string) => {
    const res = await instance.delete(`/product/${id}`, {
        headers: {
            Authorization: "Bearer " + sessionStorage.getItem('token')
        }
    })
}