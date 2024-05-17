interface response<T>{
    status: string;
    message: string;
    data: T;
}

const responseMiddleWare = <T>(status: string, message: string, data?: T): response<T> => {
    return {
        status,
        message,
        data: data as T
    };
}

export default responseMiddleWare;