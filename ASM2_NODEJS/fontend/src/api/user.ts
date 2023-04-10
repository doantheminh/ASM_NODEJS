import instance from "./instance";

export const getUser = () => {
    return instance.get('/user')
}

export const loginUser = async (user) => {
    try {
        const response = await instance.post("/login", user)
        if (response.status === 200) {
            sessionStorage.setItem('token', response.data.accessToken);
            sessionStorage.setItem('user', response.data.user.role);
            return true;
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.message);
        } else {
            console.log(error);
            throw new Error('Đã xảy ra lỗi khi đăng nhập!');
        }
    }
};

export const createUser = async (user) => {
    try {
        const response = await instance.post('/register', user)
        if (response.status === 200) {
            return true;
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            throw new Error(error.response.data.message);
        } else {
            console.log(error);
            throw new Error('Đã xảy ra lỗi khi đăng ký!');
        }
    }
};