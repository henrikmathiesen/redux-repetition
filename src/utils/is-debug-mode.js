const isDebugMode = () => { 
    return process.env.NODE_ENV !== 'production';
};

export default isDebugMode;
